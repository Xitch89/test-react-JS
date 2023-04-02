import React from 'react';
import classes from './css/Content.module.css';
import postData from '../../constants/postData';
import Post from './ContentPost';
import { ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE, FILTERS } from '../../constants/constants';

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
      activeEvent: null,
      activeFilter: []
    };
    const copyPostData = postData.slice();
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    const sortMethods = {
      [FILTERS.DEF]: this.sortByPostNumber,
      [FILTERS.DATE]: this.sortByIdDate,
      [FILTERS.ALPHABET]: this.sortByIdAlphabet,
      [FILTERS.LESS_THAN_10]: this.sortByLessThan10,
      [FILTERS.NONE]: (data) => data
    };
    this.state.copyPostData = copyPostData;
    this.state.numberSortPostData = numberSortPostData;
    this.state.sortMethods = sortMethods;
  }

  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleKeyDown);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { activeFilter, copyPostData, sortMethods } = this.state;
    if (prevState.activeFilter !== activeFilter) {
      const sortMethod = sortMethods[activeFilter] || sortMethods[FILTERS.NONE];
      const numberSortPostData = sortMethod(copyPostData.slice());
      this.setState({ numberSortPostData });
    }
  }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.handleKeyDown);
  // }

  handleKeyDown = (event) => {
    const { selectedCards, numberSortPostData } = this.state;
    const keyCode = event.keyCode || event.which;
    const ctrlKey = event.ctrlKey || event.metaKey; // for Mac
    const isK = keyCode === ARROW_UP_KEY_CODE;
    const isM = keyCode === ARROW_DOWN_KEY_CODE;
    if (ctrlKey && (isK || isM)) {
      event.preventDefault(); // prevent default behavior of the browser (e.g. scrolling)
      const increment = isK ? 1 : -1;
      const newSelectedCards = selectedCards.map((id) => {
        let index = numberSortPostData.findIndex((post) => post.id === id);
        if (index === -1) return id;
        index += increment;
        if (index < 0) index = numberSortPostData.length - 1;
        else if (index >= numberSortPostData.length) index = 0;
        return numberSortPostData[index].id;
      });
      this.setState({ 
        selectedCards: newSelectedCards,
        clickedCards: newSelectedCards 
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
    if (clickedCards.includes(post.order)) {
      this.setState({
        clickedCards: clickedCards.filter((order) => order !== post.order),
        selectedCards: selectedCards.filter((id) => id !== post.id)
      });
    } else {
      this.setState({
        clickedCards: [...clickedCards, post.order],
        selectedCards: [...selectedCards, post.id]
      });
    }
  };

  // drag and drop

  sortPost = ((a, b) => a.order - b.order);

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
