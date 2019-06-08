<template>
  <div class="home">
    
  </div>
</template>
<template>
  <div class="home">
    <div class="hero">
      <img src="@/assets/logo.png">
      <div class="dl-button">
        <svg height="60" width="320">
          <rect height="60" width="320" />
        </svg>
        <span>Get A Free Quote</span>
      </div>
      <div class="service-text">
        <h1>Advance A/C Refrigeration & Heating Co.</h1>
        <p>Installation | Repairs | Maintenance</p>
        <p>Services for Air Condition | Refrigeration | Heating | Ice Maker</p>
        <p>Services all of Dallas area</p>
        <p>Schedule Service Today: (214) 909-3191</p>
        <!-- <Form /> -->
      </div>
    </div>
    <div class="video-container">
      <div class="video">
        <video autoplay muted loop id="home-video">
          <source src="@/assets/home-video.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="kickstarter">
      <div class="text">
        <a :href="'//' + kickstarter.link" target="_blank" class="button button--purple">{{ kickstarter.name }}</a>
      </div>
    </div>
    <TestForm />
  </div>

</template>

<script>
import TestForm from "@/components/TestForm";

export default {
  name: "Home",
  components: {
    TestForm,
  },
  data() {
    return {
      kickstarter:{
        name:'Get A Free Quote',
        link: '#'
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.hero{
  width: 100%;
  height: 100%;
  padding-top:80px;
  background: url("~@/assets/heroimage.jpg") center no-repeat;
  background-size: cover;
  color: #ddd;
  img{
    margin: auto;
  }
  .dl-button{
    position:relative;
    border: 3px solid #528fe0;
    background-color: rgba(0,0,0,0.8);
    text-align: center;
    overflow: hidden;
    margin: 120px auto;
    width: 320px;  
    height: 60px;
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    @media screen and (max-width: 568px){
      display: none;
    }
    &:hover {
      transform: translateY(-1px);
    }
    &:hover rect {
      stroke-width: 2px;
      stroke-dashoffset: 0;
      stroke-dasharray: 760;
    }
    rect {
      stroke-dasharray: 140 540;
      stroke-dashoffset: -474;
      stroke-width: 8px;
      fill: transparent;
      stroke: #ddd;
      border-bottom: 5px solid black;
      transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
    }
    span{
      top: 15px;
      right: 0;
      left: 0;
      position: absolute;
      font-size: 32px;
      font-weight: bold;
      line-height: 32px;
      letter-spacing: 2px;
      color: #ddd;
      user-select: none;
    }
  }
  .service-text{
    display: flex;
    flex-direction: column;
    padding: 0 14px 100px;
    background-color:hsl(214, 70%, 60%);
    color:#fff;
    text-shadow: 0 1px 3px rgba(36,180,126,.4);
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    border-radius: 4px;
    font-size: 22px;
  }
}
.video-container{
  position: relative;
  height: 200px;
  .video{
    position: absolute;
    left: 0;
    right: 0;
    top: -80px;
    #home-video{
      max-height:360px;
      padding: 10px;
      border: 2px solid #ddd;
      user-select: none;
      @media screen and (max-width: 768px){
        max-width: calc(100% - 60px);
      }
    }
  }
}
.kickstarter{
  display: flex;
  align-items:center;
  justify-content: center;
  height: 300px;
  padding: 20px;  
  background:#2b2b2b;
  border-radius: 4px;
  text-shadow: 0 1px 3px rgba(36,180,126,.4);
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);  
  color:#ddd;
  font-size: 24px;
  .button{
    font-size:24px;
    background-color: #3ecf8e;    
    text-shadow: 0 4px 4px rgba(36, 180, 126, 0.4);
  }
}
</style>