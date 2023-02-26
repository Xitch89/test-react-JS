import React, { Component } from "react";
import classes from "./content.module.css";


//* images
import landing_vr1 from "../../assets/images/landing_vr1.png";
import about_company from "../../assets/images/about_company.png";
import about_team from "../../assets/images/about_team.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog_categories from "../../assets/images/blog_categories.png";
import contact_us from "../../assets/images/contact_us.png";
import faq_page from "../../assets/images/faq_page.png";
import landing_vr2 from "../../assets/images/landing_vr2.png";
import landing_vr3 from "../../assets/images/landing_vr3.png";
import licenses from "../../assets/images/licenses.png";
import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio4.png";
import pricing from "../../assets/images/pricing.png";
import single_blog from "../../assets/images/single_blog.png";
import single_project from "../../assets/images/single_project.png";
import single_team_member from "../../assets/images/single_team_member.png";
import style_guide from "../../assets/images/style_guide.png";
import Post from "../camon/post/post";



class Content extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isDateChecked: false,
      isAlphabetChecked: false,
      postData: [
      {id: 'landing_vr1', massage: 'Landing vr.1', image: landing_vr1, date: '10.03.2023', postNumber: 1 },
      {id: 'landing_vr2', massage: 'Landing vr.2', image: landing_vr2, date: '11.03.2023', postNumber: 2 },
      {id: 'landing_vr3', massage: 'Landing vr.3', image: landing_vr3, date: '12.03.2023', postNumber: 3 },
      {id: 'portfolio1', massage: 'Portfolio 1', image: portfolio1, date: '08.02.2022', postNumber: 4 },
      {id: 'portfolio2', massage: 'Portfolio 1', image: portfolio2, date: '27.11.2023', postNumber: 5 },
      {id: 'portfolio3', massage: 'Portfolio 1', image: portfolio3, date: '24.03.2023', postNumber: 6 },
      {id: 'portfolio4', massage: 'Portfolio 1', image: portfolio4, date: '22.03.2023', postNumber: 7 },
      {id: 'single_project', massage: 'Single Project', image: single_project, date: '22.03.2023', postNumber: 8 },
      {id: 'about_company', massage: 'About Company', image: about_company, date: '22.03.2023', postNumber: 9 },
      {id: 'about_team', massage: 'About TEam', image: about_team, date: '22.03.2023', postNumber: 10 },
      {id: 'single_team_member', massage: 'Single Team Member', image: single_team_member, date: '22.03.2023', postNumber: 11 },
      {id: 'faq_page', massage: 'FAQ Page', image: faq_page, date: '22.03.2023', postNumber: 12 },
      {id: 'contact_us', massage: 'Contact Us', image: contact_us, date: '22.03.2023', postNumber: 13 },
      {id: 'blog1', massage: 'Blog 1', image: blog1, date: '22.03.2023', postNumber: 14 },
      {id: 'blog2', massage: 'Blog 2', image: blog2, date: '22.03.2023', postNumber: 15 },
      {id: 'blog3', massage: 'Blog 3', image: blog3, date: '22.03.2023', postNumber: 16 },
      {id: 'blog_categories', massage: 'Blog Categories', image: blog_categories, date: '22.03.2023', postNumber: 17 },
      {id: 'single_blog', massage: 'Single Blog', image: single_blog, date: '22.03.2023', postNumber: 18 },
      {id: 'pricing', massage: 'Pricing', image: pricing, date: '22.03.2023', postNumber: 19 },
      {id: 'style_guide', massage: 'Style guide', image: style_guide, date: '22.03.2023', postNumber: 20 },
      {id: 'licenses', massage: 'Licenses', image: licenses, date: '22.03.2023', postNumber: 21 }
    ],
    copyPostData: [],
    numberSortPostData: []
    };
    this.state.copyPostData = this.state.postData.slice();
  }
  componentDidMount() {
    const { copyPostData } = this.state;
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.setState({ numberSortPostData });
  }

  sortByPostNumber = (post) => {
    for (let i = 1; i > post.length; i++) {
      let key = post[i];
      let j = i - 1;
      while (j >= 0 && post[j].postNumber < key.postNumber) {
        post[j + 1] = post[j];
        j = j - 1;
      }
      post[j + 1] = key;
    }
    return post;
  };
  
  
  render() {
    const { isDateChecked, isAlphabetChecked, numberSortPostData, copyPostData} = this.state;

    const sortByIdAlphabet = (post) => {
      return post.slice().sort((a, b) => a.id.localeCompare(b.id));
    };


    let handleCheckboxAlphabetChange = (event) => {
      if (event.target.checked) {
        this.setState({ isAlphabetChecked: true, numberSortPostData: sortByIdAlphabet(numberSortPostData) });
      } else {
        this.setState({ isAlphabetChecked: false, numberSortPostData: copyPostData });
      }
    };

    const sortByIdDate = (post) => {
      return post.slice().sort((a, b) => b.date.localeCompare(a.date));
    };

    let handleCheckboxDateChange = (event) => {
      if (event.target.checked) {
        this.setState({ isDateChecked: true, numberSortPostData: sortByIdDate(numberSortPostData) });
      } else {
        this.setState({ isDateChecked: false, numberSortPostData: copyPostData });
      }
    };

    const newPost = numberSortPostData.map((post) => (
      <Post key={post.id} id={post.id} massage={post.massage} image={post.image} date={post.date} />
    ));

    return (
      <div>
        <div className={classes.checkBox}>
        <label className={classes.checkBoxContainer}>
          <input type="checkbox" checked={isAlphabetChecked} onChange={handleCheckboxAlphabetChange} />
          Filter by alphabet
          <span className={classes.checkmark}></span>
        </label>
        <label className={classes.checkBoxContainer}>
          <input type="checkbox" checked={isDateChecked} onChange={handleCheckboxDateChange} />
          Filter by post date
          <span className={classes.checkmark}></span>
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