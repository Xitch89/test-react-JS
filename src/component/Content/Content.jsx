import React from 'react';
import classes from './css/Content.module.css';
import postData from '../../constants/postData';
import Post from './ContentPost';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateChecked: false,
      isAlphabetChecked: false,
      isLessChecked: false,
      copyPostData: [],
      numberSortPostData: [],
      clickedCard: null,
      // cursor: 0,
      // result: []
    };
    const copyPostData = postData.slice();
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.state.copyPostData = copyPostData;
    this.state.numberSortPostData = numberSortPostData;
  }
  // default sort

  componentDidMount() {
    const { copyPostData } = this.state;
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.setState({ numberSortPostData });
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // handleKeyDown(e) {
  //   const { cursor, result } = this.state;
  //   // arrow up/down button should select next/previous list element
  //   if (e.keyCode === 38 && cursor > 0) {
  //     this.setState(prevState => ({
  //       cursor: prevState.cursor - 1
  //     }));
  //   } else if (e.keyCode === 40 && cursor < result.length - 1) {
  //     this.setState(prevState => ({
  //       cursor: prevState.cursor + 1
  //     }));
  //   }
  // }

  sortByPostNumber = (post) => {
    const copyPostData = [...post];
    for (let i = 0; i < copyPostData.length; i += 1) {
      const key = copyPostData[i];
      let j = i - 1;
      while (j >= 0 && copyPostData[j].id > key.id) {
        copyPostData[j + 1] = copyPostData[j];
        j -= 1;
      }
      copyPostData[j + 1] = key;
    }
    return copyPostData;
  };

  // filters

  sortByIdAlphabet = (post) => {
    return post.slice().sort((a, b) => a.postRef.localeCompare(b.postRef));
  };

  handleCheckboxAlphabetChange = (event) => {
    const { numberSortPostData, copyPostData } = this.state; 
    const updatedNumberSortPostData = this.sortByIdAlphabet(numberSortPostData);
    if (event.target.checked) {
      this.setState({
        isAlphabetChecked: true,
        isDateChecked: false,
        isLessChecked: false,
        numberSortPostData: updatedNumberSortPostData
      });
    } else {
      this.setState({
        isAlphabetChecked: false,
        isDateChecked: false,
        isLessChecked: false,
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  sortByIdDate = (post) => {
    return post.slice().sort((a, b) => b.date.localeCompare(a.date));
  };

  handleCheckboxDateChange = (event) => {
    const { numberSortPostData, copyPostData } = this.state;
    const updatedNumberSortPostData = this.sortByIdDate(numberSortPostData);
    if (event.target.checked) {
      this.setState({
        isDateChecked: true,
        isAlphabetChecked: false,
        isLessChecked: false,
        numberSortPostData: updatedNumberSortPostData
      });
    } else {
      this.setState({
        isDateChecked: false,
        isAlphabetChecked: false,
        isLessChecked: false,
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  sortByLessThan10 = (post) => {
    const sortedPostData = post.slice().sort((a, b) => b.id - a.id);
    return sortedPostData.slice(0, -10);
  };

  handleCheckboxLessThan10 = (event) => {
    const { numberSortPostData, copyPostData } = this.state;
    const updatedNumberSortPostData = this.sortByLessThan10(numberSortPostData);
    if (event.target.checked) {
      this.setState({
        isLessChecked: true,
        isDateChecked: false,
        isAlphabetChecked: false,
        numberSortPostData: updatedNumberSortPostData
      });
    } else {
      this.setState({
        isLessChecked: false,
        isDateChecked: false,
        isAlphabetChecked: false,
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  // Click

  handleCardClick = (key) => {
    const { clickedCard } = this.state;
    if (key.order === clickedCard) {
      this.setState({ clickedCard: null });
    } else {
      this.setState({ clickedCard: key.order });
    }
  };

  // handleKeyDown = (e) => {
  //   const { numberSortPostData } = this.state;
  //   const selectedCard = document.querySelector('.selected');
  //   if (selectedCard) {
  //     let nextCard;
  //     switch (e.key) {
  //       case 'ArrowLeft':
  //         nextCard = selectedCard.previousSibling;
  //         break;
  //       case 'ArrowRight':
  //         nextCard = selectedCard.nextSibling;
  //         break;
  //       default:
  //         return;
  //     }
  //     if (nextCard) {
  //       selectedCard.classList.remove('selected');
  //       nextCard.classList.add('selected');
  //     }
  //   } else if (numberSortPostData.length > 0) {
  //     numberSortPostData[0].ref.current.focus();
  //     numberSortPostData[0].ref.current.classList.add('selected');
  //   }
  // };

  // drag and drop

  sortPost = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  dragStartHandler(e, card) {
    this.setState({ currentCard: card });
  }

  dragEndHandler(e) {
    const eventTarget = e.target;
    eventTarget.style.background = '';
  }

  dragOverHandler(e) {
    const eventTarget = e.target;
    e.preventDefault();
    eventTarget.style.background = 'gray';
  }

  dragLeaveHandler(e) {
    const eventTarget = e.target;
    eventTarget.style.background = '';
  }

  dropHandler(e, card) {
    const { currentCard, copyPostData } = this.state;
    const eventTarget = e.target;
    eventTarget.style.background = '';
    e.preventDefault();
    const updatedCopyPostData = copyPostData.map((c) => {
      if (c.order === card.order) {
        return { ...c, order: currentCard.order };
      }
      if (c.order === currentCard.order) {
        return { ...c, order: card.order };
      }
      return c;
    });
    const updatedNumberSortPostData = updatedCopyPostData.sort(this.sortPost);
    this.setState({
      isLessChecked: false,
      isDateChecked: false,
      isAlphabetChecked: false,
      currentCard: null,
      copyPostData: updatedCopyPostData,
      numberSortPostData: updatedNumberSortPostData
    });
  }

  render() {
    const {
      isAlphabetChecked,
      isDateChecked,
      isLessChecked,
      numberSortPostData,
      clickedCard,
      id,
      postRef,
      massage,
      image,
      date
      // cursor
    } = this.state;
    const clicked = `${classes.layoutsItems} ${clickedCard ? 'selected' : ''}`;
    // const isSelected = this.id === this.clickedCard;
    // const className = `${classes.layoutsItems} ${isSelected ? classes.selected : ''}`;

    const newPost = numberSortPostData.map((post) => (
      <button 
        type="button"
        onDragStart={(e) => this.dragStartHandler(e, post)}
        onDragLeave={(e) => this.dragLeaveHandler(e)}
        onDragEnd={(e) => this.dragEndHandler(e)}
        onDragOver={(e) => this.dragOverHandler(e)}
        onDrop={(e) => this.dropHandler(e, post)}
        onClick={this.handleCardClick}
        // onKeyDown={this.handleKeyDown}
        draggable
        className={clicked} 
      >
        <Post
          id={id}
          postRef={postRef} 
          massage={massage} 
          image={image} 
          date={date}
        />
      </button>
    ));

    return (
      <div>
        <div className={classes.checkBox}>
          <label htmlFor="alphabet" className={classes.checkBoxContainer}>
            <input
              id="alphabet" 
              type="checkbox" 
              checked={isAlphabetChecked} 
              onChange={this.handleCheckboxAlphabetChange}
            />
            Filter by alphabet
            <span className={classes.checkmark} />
          </label>
          <label htmlFor="checkboxDate" className={classes.checkBoxContainer}>
            <input
              id="checkboxDate" 
              type="checkbox" 
              checked={isDateChecked} 
              onChange={this.handleCheckboxDateChange}
            />
            Filter by post date
            <span className={classes.checkmark} />
          </label> 
          <label htmlFor="lessThan10" className={classes.checkBoxContainer}>
            <input
              id="lessThan10" 
              type="checkbox" 
              checked={isLessChecked} 
              onChange={this.handleCheckboxLessThan10} 
            />
            Show last ten
            <span className={classes.checkmark} />
          </label>
        </div>
        <div className={classes.exampleLayouts_container}>
          <div className={classes.exampleLayouts_wrapper}>
            {newPost}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
