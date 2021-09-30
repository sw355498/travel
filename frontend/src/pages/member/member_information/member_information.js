import React from 'react'
import { Link, Route  } from 'react-router-dom'
// import Member_Order from './member_order/Member_order'
// import Member_hope from '../member_hope/member_hope'

function  Member_Information
() {
  return (
      
<>
<div class="member-background">
  
<div class="container">
  
  <div class="parent">
  <div ><nav class="left-member">
          <img class="nav-member-avatar" src="/images/img/avatar.png" alt="avatar" />
          <ul class="container list nav-member-size18">
            <li>黃凱莉</li>
            <li>初階會員</li>
            
          </ul>
        </nav>
  <nav class="left-member2">
    <ul class="list list1 nav-member2-size18">
      <li class="list-color">基本資料設定</li>
{/*     
      <li><Link to="/Member_Order">訂單管理</Link></li>         
       <li ><Link to="/journey_info">願望清單</Link></li>
      <li><Link to="member-Evaluation.html">我的評價</Link></li> */}
    </ul>
  </nav></div> 
  
  <div class="container">
    <div class="main-article">
      
      <div class="main-article-text">基本資料</div>
      <div class="main-article1-text1 main-article-text1">姓 :</div>
      <input
        type="email"
        class="form-control main-article1-text2 main-article-text2"
        id="exampleFormControlInput1"
        placeholder="黃"
      />

      <div class="main-article1-text3 main-article-text1">出生日期 :</div>
      <input
        type="email"
        class="form-control main-article1-text4 main-article-text2"
        id="exampleFormControlInput1"
        placeholder="2000/06/23"
      />
      <div class="main-article1-text5 main-article-text1">連絡電話:</div>
      <input
        type="email"
        class="form-control main-article1-text6 main-article-text2"
        id="exampleFormControlInput1"
        placeholder="0912345678"
      />
   
      <div class="main-article1-text7 main-article-text1">名 :</div>
      <input
        type="email"
        class="form-control main-article1-text8 main-article-text2"
        id="exampleFormControlInput1"
        placeholder="凱莉"
      />
      <div class="main-article1-text9 main-article-text1">
        國家/地區 :
      </div>

      <input
        type="email"
        class="form-control main-article1-text10 main-article-text2"
        id="exampleFormControlInput1"
        placeholder="台灣"
      />

      <div class="mb-3">
        <label
          for="exampleFormControlInput1"
          class="form-label main-article1-text11 main-article-text1"
          >連絡信箱 :</label
        >
        <input
          type="email"
          class="form-control main-article1-text12 main-article-text2"
          id="exampleFormControlInput1"
          placeholder="Kelly@test.com"
        />
      </div>
      <div class="main-article-sex">性別 :</div>
<div class="box-boy"><div class="form-check">
<input
class="form-check-input"
type="radio"
name="flexRadioDefault"
id="flexRadioDefault1"
/>
<label class="form-check-label" for="flexRadioDefault1">
男
</label>
</div></div>
<div class="box-girl">
<div class="form-check">
<input
class="form-check-input"
type="radio"
name="flexRadioDefault"
id="flexRadioDefault2"
checked
/>
<label class="form-check-label" for="flexRadioDefault2">
女
</label>
</div></div> 
      
      <button
      class="btn btn-secondary nav-article-section-delete"
      type="button"
      aria-label="">
      修改
    </button>
      </div>
    </div>
</div>
</div>
</div>

</>
)
}
export default Member_Information