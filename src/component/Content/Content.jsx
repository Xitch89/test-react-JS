import React from 'react';
import classes from './css/Content.module.css';
import postData from '../../constants/postData';
import Post from './ContentPost';

const FILTERS = {
  DATE: 'date', ALPHABET: 'alphabet', LESS_THAN_10: 'lessThan10', DEF: 'default'
};

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateChecked: false,
      isAlphabetChecked: false,
      isLessChecked: false,
      copyPostData: [],
      numberSortPostData: [],
      clickedCards: [],
      selectedCards: [],
      selectedObjectIndex: [],
      activeEvent: null,
      activeFilter: []
    };
    const copyPostData = postData.slice();
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.state.copyPostData = copyPostData;
    this.state.numberSortPostData = numberSortPostData;
  }

  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleKeyDown);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { activeFilter, copyPostData } = this.state;
    if (prevState.activeFilter !== activeFilter) {
      let numberSortPostData;
      switch (activeFilter) {
        case FILTERS.DEF:
          numberSortPostData = this.sortByPostNumber(copyPostData);
          break;
        case FILTERS.DATE:
          numberSortPostData = this.sortByIdDate(copyPostData);
          break; 
        case FILTERS.ALPHABET:
          numberSortPostData = this.sortByIdAlphabet(copyPostData);
          break;
        case FILTERS.LESS_THAN_10:
          numberSortPostData = this.sortByLessThan10(copyPostData);
          break;
        default:
          numberSortPostData = copyPostData.slice();
      }
      this.setState({ numberSortPostData });
    }
  }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.handleKeyDown);
  // }

  handleKeyDown = (e) => {
    const { ctrlKey } = e;
    if (ctrlKey) {
      switch (e.keyCode) {
        case 73: // код клавіші вверх
          e.preventDefault();
          console.log('Up key pressed');
          this.highlightPreviousCard();
          break;
        case 75: // код клавіші вниз
          e.preventDefault();
          console.log('Down key pressed');
          this.highlightNextCard();
          break;
        default:
          break;
      }
    }
  };

  highlightPreviousCard = () => {
    console.log('previous card');
    const { selectedObjectIndex } = this.state;
    const currentIndex = selectedObjectIndex.length > 0 ? selectedObjectIndex[selectedObjectIndex.length - 1] : -1;
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0 && previousIndex < document.querySelectorAll('.layoutsItems').length) {
      const newSelectedObjectIndex = selectedObjectIndex.filter((id) => id !== currentIndex);
      this.setState({
        selectedObjectIndex: [...newSelectedObjectIndex, previousIndex],
      });
    }
  };

  highlightNextCard = () => {
    console.log('next card');
    const { selectedObjectIndex } = this.state;
    const currentIndex = selectedObjectIndex.length > 0 ? selectedObjectIndex[selectedObjectIndex.length - 1] : -1;
    const nextIndex = currentIndex + 1;
    if (nextIndex >= 0 && nextIndex < document.querySelectorAll('.layoutsItems').length) {
      const newSelectedObjectIndex = selectedObjectIndex.filter((id) => id !== currentIndex);
      this.setState({
        selectedObjectIndex: [...newSelectedObjectIndex, nextIndex],
      });
    }
  };

  // default sort

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
    const { copyPostData } = this.state; 
    const updatedNumberSortPostData = this.sortByIdAlphabet(copyPostData);
    if (event.target.checked) {
      this.setState({
        isAlphabetChecked: true,
        isDateChecked: false,
        isLessChecked: false,
        activeFilter: FILTERS.ALPHABET,
        numberSortPostData: updatedNumberSortPostData
      });
    } else {
      this.setState({
        isAlphabetChecked: false,
        activeFilter: FILTERS.DEF,
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  sortByIdDate = (post) => {
    return post.slice().sort((a, b) => b.date.localeCompare(a.date));
  };

  handleCheckboxDateChange = (event) => {
    const { copyPostData } = this.state;
    const updatedNumberSortPostData = this.sortByIdDate(copyPostData);
    if (event.target.checked) {
      this.setState({
        isDateChecked: true,
        isAlphabetChecked: false,
        isLessChecked: false,
        activeFilter: FILTERS.DATE,
        numberSortPostData: updatedNumberSortPostData
      });
    } else {
      this.setState({
        isDateChecked: false,
        activeFilter: FILTERS.DEF,
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  sortByLessThan10 = (post) => {
    const sortedPostData = post.slice().sort((a, b) => b.id - a.id);
    return sortedPostData.slice(0, -10);
  };

  handleCheckboxLessThan10 = (e) => {
    const { copyPostData } = this.state;
    const updatedNumberSortPostData = this.sortByLessThan10(copyPostData);
    if (e.target.checked) {
      this.setState({
        isLessChecked: true,
        isDateChecked: false,
        isAlphabetChecked: false,
        activeFilter: FILTERS.LESS_THAN_10,
        numberSortPostData: updatedNumberSortPostData
      });
    } else {
      this.setState({
        isLessChecked: false,
        activeFilter: FILTERS.DEF,
        numberSortPostData: this.sortByPostNumber(copyPostData)
      });
    }
  };

  // Click

  handleCardClick = (e, post) => {
    const { clickedCards, selectedCards } = this.state;
    const clickedIndex = clickedCards.indexOf(post.order);
    if (clickedIndex !== -1) {
      // Об'єкт вже був клікнутий, тому його треба видалити
      this.setState({
        clickedCards: clickedCards.filter((order) => order !== post.order),
        selectedCards: selectedCards.filter((id) => id !== post.id)
      });
    } else {
      // Об'єкт ще не був клікнутий, тому його треба додати
      this.setState({
        clickedCards: [...clickedCards, post.order],
        selectedCards: [...selectedCards, post.id]
      });
    }
  };

  // drag and drop

  sortPost = (a, b) => {
    return a.order > b.order ? 1 : -1;
  };

  dragStartHandler(e, card) {
    this.setState({
      activeEvent: card.order,
      currentCard: card,
    });
  }

  dragEndHandler() {
    this.setState({ activeEvent: [] });
  }

  dragOverHandler(e, card) {
    e.preventDefault();
    this.setState({ activeEvent: card.order });
  }

  dragLeaveHandler() {
    this.setState({ activeEvent: [] });
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
      numberSortPostData: updatedNumberSortPostData,
      activeEvent: [],
      clickedCards: [],
      selectedCards: []
    });
  }

  render() {
    const {
      isAlphabetChecked,
      isDateChecked,
      isLessChecked,
      numberSortPostData,
      clickedCards,
      selectedCards,
      previousIndex,
      nextIndex,
      selectedObjectIndex,
      activeEvent
    } = this.state;

    const newPost = numberSortPostData.map((post) => (
      <button 
        type="button"
        onDragStart={(e) => this.dragStartHandler(e, post)}
        onDragLeave={(e) => this.dragLeaveHandler(e)}
        onDragEnd={(e) => this.dragEndHandler(e)}
        onDragOver={(e) => this.dragOverHandler(e, post)}
        onDrop={(e) => this.dropHandler(e, post)}
        onClick={(e) => this.handleCardClick(e, post)}
        onKeyDown={(e) => this.handleKeyDown(e)}
        draggable
        className={`${classes.layoutsItems} 
        ${clickedCards.includes(post.order) ? classes.selected : ''} 
        ${selectedCards.includes(post.id) ? classes.selected : ''}
        ${selectedObjectIndex.includes(previousIndex || nextIndex) && classes.selected}
        ${activeEvent === post.order ? classes.selected : ''}`}
      >
        <Post
          id={post.id}
          postRef={post.postRef} 
          massage={post.massage} 
          image={post.image} 
          date={post.date}
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
