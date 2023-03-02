import React, { Component } from 'react';
import classes from './content.module.css';

//* images
import LandingVr1 from '../../assets/images/landing_vr1.png';
import AboutCompany from '../../assets/images/about_company.png';
import AboutTeam from '../../assets/images/about_team.png';
import Blog1 from '../../assets/images/blog1.png';
import Blog2 from '../../assets/images/blog2.png';
import Blog3 from '../../assets/images/blog3.png';
import BlogCategories from '../../assets/images/blog_categories.png';
import ContactUs from '../../assets/images/contact_us.png';
import FaqPage from '../../assets/images/faq_page.png';
import LandingVr2 from '../../assets/images/landing_vr2.png';
import LandingVr3 from '../../assets/images/landing_vr3.png';
import Licenses from '../../assets/images/licenses.png';
import Portfolio1 from '../../assets/images/portfolio1.png';
import Portfolio2 from '../../assets/images/portfolio2.png';
import Portfolio3 from '../../assets/images/portfolio3.png';
import Portfolio4 from '../../assets/images/portfolio4.png';
import Pricing from '../../assets/images/pricing.png';
import SingleBlog from '../../assets/images/single_blog.png';
import SingleProject from '../../assets/images/single_project.png';
import SingleTeamMember from '../../assets/images/single_team_member.png';
import StyleGuide from '../../assets/images/style_guide.png';
import Post from '../camon/post/post';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateChecked: false,
      isAlphabetChecked: false,
      isLessChecked: false,
      postData: [
        {
          id: 'landing_vr2', massage: 'Landing vr.2', image: LandingVr2, date: '11.03.2023', postNumber: 2 
        },
        {
          id: 'landing_vr1', massage: 'Landing vr.1', image: LandingVr1, date: '10.03.2023', postNumber: 1 
        },
        {
          id: 'landing_vr3', massage: 'Landing vr.3', image: LandingVr3, date: '12.03.2023', postNumber: 3 
        },
        {
          id: 'portfolio1', massage: 'Portfolio 1', image: Portfolio1, date: '08.02.2022', postNumber: 4 
        },
        {
          id: 'portfolio2', massage: 'Portfolio 1', image: Portfolio2, date: '27.11.2023', postNumber: 5 
        },
        {
          id: 'portfolio3', massage: 'Portfolio 1', image: Portfolio3, date: '24.03.2023', postNumber: 6 
        },
        {
          id: 'portfolio4', massage: 'Portfolio 1', image: Portfolio4, date: '22.03.2023', postNumber: 7 
        },
        {
          id: 'single', massage: 'Single Project', image: SingleProject, date: '22.03.2023', postNumber: 8 
        },
        {
          id: 'about_company', massage: 'About Company', image: AboutCompany, date: '22.03.2023', postNumber: 9 
        },
        {
          id: 'about_team', massage: 'About TEam', image: AboutTeam, date: '22.03.2023', postNumber: 10 
        },
        {
          id: 'single_team', massage: 'Single Team Member', image: SingleTeamMember, date: '22.03.2023', postNumber: 11 
        },
        {
          id: 'faq_page', massage: 'FAQ Page', image: FaqPage, date: '22.03.2023', postNumber: 12 
        },
        {
          id: 'contact_us', massage: 'Contact Us', image: ContactUs, date: '22.03.2023', postNumber: 13 
        },
        {
          id: 'blog1', massage: 'Blog 1', image: Blog1, date: '22.03.2023', postNumber: 14 
        },
        {
          id: 'blog2', massage: 'Blog 2', image: Blog2, date: '22.03.2023', postNumber: 15 
        },
        {
          id: 'blog3', massage: 'Blog 3', image: Blog3, date: '22.03.2023', postNumber: 16 
        },
        {
          id: 'blog_categories', massage: 'Blog Categories', image: BlogCategories, date: '22.03.2023', postNumber: 17 
        },
        {
          id: 'single_blog', massage: 'Single Blog', image: SingleBlog, date: '22.03.2023', postNumber: 18 
        },
        {
          id: 'pricing', massage: 'Pricing', image: Pricing, date: '22.03.2023', postNumber: 19 
        },
        {
          id: 'style_guide', massage: 'Style guide', image: StyleGuide, date: '22.03.2023', postNumber: 20 
        },
        {
          id: 'licenses', massage: 'Licenses', image: Licenses, date: '22.03.2023', postNumber: 21 
        }
      ],
      copyPostData: [],
      numberSortPostData: []
    };
    const { postData } = this.state;
    const copyPostData = postData.slice();
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.state.copyPostData = copyPostData;
    this.state.numberSortPostData = numberSortPostData;
  }

  componentDidMount() {
    const { copyPostData } = this.state;
    const numberSortPostData = this.sortByPostNumber(copyPostData);
    this.setState({ numberSortPostData });
  }

  sortByPostNumber = (post) => {
    const copyPostData = [...post];
    for (let i = 0; i < copyPostData.length; i += 1) {
      const key = copyPostData[i];
      let j = i - 1;
      while (j >= 0 && copyPostData[j].postNumber > key.postNumber) {
        copyPostData[j + 1] = copyPostData[j];
        j -= 1;
      }
      copyPostData[j + 1] = key;
    }
    return copyPostData;
  };

  render() {
    const { 
      isDateChecked, isAlphabetChecked, isLessChecked, numberSortPostData, copyPostData 
    } = this.state;

    const sortByIdAlphabet = (post) => {
      return post.slice().sort((a, b) => a.id.localeCompare(b.id));
    };

    const handleCheckboxAlphabetChange = (event) => {
      const updatedNumberSortPostData = sortByIdAlphabet(numberSortPostData);
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
          numberSortPostData: copyPostData
        });
      }
    };

    const sortByIdDate = (post) => {
      return post.slice().sort((a, b) => b.date.localeCompare(a.date));
    };

    const handleCheckboxDateChange = (event) => {
      const updatedNumberSortPostData = sortByIdDate(numberSortPostData);
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
          numberSortPostData: copyPostData
        });
      }
    };

    const sortByLessThan10 = (post) => {
      const sortedPostData = post.slice().sort((a, b) => b.postNumber - a.postNumber);
      return sortedPostData.slice(0, 10);
    };

    const handleCheckboxLessThan10 = (event) => {
      const updatedNumberSortPostData = sortByLessThan10(numberSortPostData);
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
          numberSortPostData: copyPostData
        });
      }
    };

    const newPost = numberSortPostData.map((post) => (
      <Post
        key={post.id}
        id={post.id} 
        massage={post.massage} 
        image={post.image} 
        date={post.date}
      />
    ));

    return (
      <div>
        <div className={classes.checkBox}>
          <label htmlFor="alphabet" className={classes.checkBoxContainer}>
            <input id="alphabet" type="checkbox" checked={isAlphabetChecked} onChange={handleCheckboxAlphabetChange} />
            Filter by alphabet
            <span className={classes.checkmark} />
          </label>
          <label htmlFor="checkboxDate" className={classes.checkBoxContainer}>
            <input id="checkboxDate" type="checkbox" checked={isDateChecked} onChange={handleCheckboxDateChange} />
            Filter by post date
            <span className={classes.checkmark} />
          </label> 
          <label htmlFor="lessThan10" className={classes.checkBoxContainer}>
            <input id="lessThan10" type="checkbox" checked={isLessChecked} onChange={handleCheckboxLessThan10} />
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
