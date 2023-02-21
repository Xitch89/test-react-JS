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
  render() {
    return (
      <div className={classes.exampleLayouts_container}>
        <div className={classes.exampleLayouts_wrapper}>
          <Post id = 'landing_vr1' massage = 'Landing vr.1' image = {landing_vr1} />
          <Post id = 'landing_vr2' massage = 'Landing vr.2' image = {landing_vr2} />
          <Post id = 'landing_vr3' massage = 'Landing vr.3' image = {landing_vr3} />
          <Post id = 'portfolio1' massage = 'Portfolio 1' image = {portfolio1} />
          <Post id = 'portfolio2' massage = 'Portfolio 1' image = {portfolio2} />
          <Post id = 'portfolio3' massage = 'Portfolio 1' image = {portfolio3} />
          <Post id = 'portfolio4' massage = 'Portfolio 1' image = {portfolio4} />
          <Post id = 'single_project' massage = 'Single Project' image = {single_project} />
          <Post id = 'about_company' massage = 'About Company' image = {about_company} />
          <Post id = 'about_team' massage = 'About TEam' image = {about_team} />
          <Post id = 'single_team_member' massage = 'Single Team Member' image = {single_team_member} />
          <Post id = 'faq_page' massage = 'FAQ Page' image = {faq_page} />
          <Post id = 'contact_us' massage = 'Contact Us' image = {contact_us} />
          <Post id = 'blog1' massage = 'Blog 1' image = {blog1} />
          <Post id = 'blog2' massage = 'Blog 2' image = {blog2} />
          <Post id = 'blog3' massage = 'Blog 3' image = {blog3} />
          <Post id = 'blog_categories' massage = 'Blog Categories' image = {blog_categories} />
          <Post id = 'single_blog' massage = 'Single Blog' image = {single_blog} />
          <Post id = 'pricing' massage = 'Pricing' image = {pricing} />
          <Post id = 'style_guide' massage = 'Style guide' image = {style_guide} />
          <Post id = 'licenses' massage = 'Licenses' image = {licenses} />
        </div>
      </div>
    );
  }
}

export default Content;