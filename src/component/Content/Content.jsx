import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './css/Content.module.css';
import postData from '../../constants/postData';
import Post from './ContentPost';
import { ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE } from '../../constants/constants';
import { ThemeContext } from '../Layout';

// 
function Content() {
  const [isDateChecked, setIsDateChecked] = useState(false);
  const [isAlphabetChecked, setIsAlphabetChecked] = useState(false);
  const [isLessChecked, setIsLessChecked] = useState(false);
  const [copyPostData, setCopyPostData] = useState([]);
  const [numberSortPostData, setNumberSortPostData] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [activeEvent, setActiveEvent] = useState([]);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;
    const ctrlKey = e.ctrlKey || e.metaKey; // for Mac
    const isK = keyCode === ARROW_UP_KEY_CODE;
    const isM = keyCode === ARROW_DOWN_KEY_CODE;
    if (ctrlKey && (isK || isM)) {
      e.preventDefault();
      const increment = isK ? 1 : -1;
      const newSelectedCards = selectedCards.map((id) => {
        let index = numberSortPostData.findIndex((post) => post.id === id);
        if (index === -1) return id;
        index += increment;
        if (index < 0) index = numberSortPostData.length - 1;
        else if (index >= numberSortPostData.length) index = 0;
        return numberSortPostData[index].id;
      });
      setSelectedCards(newSelectedCards);
      setClickedCards(newSelectedCards);
    }
  };

  // default sort

  const sortByPostNumber = (post) => {
    const sortedPostData = [...post];
    for (let i = 0; i < sortedPostData.length; i += 1) {
      const key = sortedPostData[i];
      let j = i - 1;
      while (j >= 0 && sortedPostData[j].id > key.id) {
        sortedPostData[j + 1] = sortedPostData[j];
        j -= 1;
      }
      sortedPostData[j + 1] = key;
    }
    return sortedPostData;
  };

  // filters

  const sortByIdAlphabet = (post) => {
    return post.slice().sort((a, b) => a.postRef.localeCompare(b.postRef));
  };

  const handleCheckboxAlphabetChange = (event) => {
    const updatedNumberSortPostData = sortByIdAlphabet(copyPostData);
    if (event.target.checked) {
      setIsAlphabetChecked(true);
      setIsDateChecked(false);
      setIsLessChecked(false);
      setNumberSortPostData(updatedNumberSortPostData);
    } else {
      setIsAlphabetChecked(false);
      setNumberSortPostData(sortByPostNumber(copyPostData));
    }
  };

  const sortByIdDate = (post) => {
    return post.slice().sort((a, b) => b.date.localeCompare(a.date));
  };

  const handleCheckboxDateChange = (event) => {
    const updatedNumberSortPostData = sortByIdDate(copyPostData);
    if (event.target.checked) {
      setIsDateChecked(true);
      setIsAlphabetChecked(false);
      setIsLessChecked(false);
      setNumberSortPostData(updatedNumberSortPostData);
    } else {
      setIsDateChecked(false);
      setNumberSortPostData(sortByPostNumber(copyPostData));
    }
  };

  const sortByLessThan10 = (post) => {
    const sortedPostData = post.slice().sort((a, b) => b.id - a.id);
    return sortedPostData.slice(0, -10);
  };

  const handleCheckboxLessThan10 = (e) => {
    const updatedNumberSortPostData = sortByLessThan10(copyPostData);
    if (e.target.checked) {
      setIsLessChecked(true);
      setIsDateChecked(false);
      setIsAlphabetChecked(false);
      setNumberSortPostData(updatedNumberSortPostData);
    } else {
      setIsLessChecked(false);
      setNumberSortPostData(sortByPostNumber(copyPostData));
    }
  };

  // Click

  const handleCardClick = (e, post) => {
    if (clickedCards.includes(post.order)) {
      setClickedCards(clickedCards.filter((order) => order !== post.order));
      setSelectedCards(selectedCards.filter((id) => id !== post.id));
    } else {
      setClickedCards([...clickedCards, post.order]);
      setSelectedCards([...selectedCards, post.id]);
    }
  };

  // drag and drop

  const sortPost = ((a, b) => a.order - b.order);

  const dragStartHandler = (e, card) => {
    setActiveEvent(card.order);
    setCurrentCard(card);
  };

  const dragEndHandler = () => {
    setActiveEvent([]);
  };

  const dragOverHandler = (e, card) => {
    e.preventDefault();
    setActiveEvent(card.order);
  };

  const dragLeaveHandler = () => {
    setActiveEvent([]);
  };

  const dropHandler = (e, card) => {
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
    const updatedNumberSortPostData = updatedCopyPostData.sort(sortPost);
    setIsLessChecked(false);
    setIsDateChecked(false);
    setIsAlphabetChecked(false);
    setCurrentCard(null);
    setCopyPostData(updatedCopyPostData);
    setNumberSortPostData(updatedNumberSortPostData);
    setActiveEvent([]);
    setClickedCards([]);
    setSelectedCards([]);
  };

  useEffect(() => {
    const NewCopyPostData = postData.slice();
    const NewNumberSortPostData = sortByPostNumber(NewCopyPostData);
    setCopyPostData(NewCopyPostData);
    setNumberSortPostData(NewNumberSortPostData);
  }, []);

  const newPost = numberSortPostData.map((post) => (
    <button 
      type="button"
      onDragStart={(e) => dragStartHandler(e, post)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e, post)}
      onDrop={(e) => dropHandler(e, post)}
      onClick={(e) => handleCardClick(e, post)}
      onKeyDown={(e) => handleKeyDown(e)}
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
        <label 
          htmlFor="alphabet" 
          className={theme === 'light' ? classes.checkBoxContainerLight : classes.checkBoxContainerDark}
        >
          <input
            id="alphabet" 
            type="checkbox" 
            checked={isAlphabetChecked} 
            onChange={handleCheckboxAlphabetChange}
          />
          {t('alphabet')}
          <span className={classes.checkmark} />
        </label>
        <label 
          htmlFor="checkboxDate" 
          className={theme === 'light' ? classes.checkBoxContainerLight : classes.checkBoxContainerDark}
        >
          <input
            id="checkboxDate" 
            type="checkbox" 
            checked={isDateChecked} 
            onChange={handleCheckboxDateChange}
          />
          {t('postDate')}
          <span className={classes.checkmark} />
        </label> 
        <label 
          htmlFor="lessThan10" 
          className={theme === 'light' ? classes.checkBoxContainerLight : classes.checkBoxContainerDark}
        >
          <input
            id="lessThan10" 
            type="checkbox" 
            checked={isLessChecked} 
            onChange={handleCheckboxLessThan10} 
          />
          {t('lastTen')}
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

export default Content;
