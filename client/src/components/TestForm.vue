<template>
  <section class="form">
    <form 
      @submit.prevent="consoleLog(form.name)"
      action="#"
      method="post">
      <div class="form-options">
      	<div class="field">
    	    <label class="label">Name</label>
    	    <div class="control">
    	      <input v-model="form.name" class="input" type="text" placeholder="Text input">
    	    </div>
    	  </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Message" v-model="form.message"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Inquiry Type</label>
          <div class="control">
            <div class="select">
              <select v-model="form.inquiry_type">
                <option disabled value="">Nothing selected</option>
                <option v-for="option in options.inquiry" :key="option.value" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">LogRocket Usecases</label>
          <div class="control">
            <div class="select is-multiple">
              <select multiple v-model="form.logrocket_usecases">
                <option>Debugging</option>
                <option>Fixing Errors</option>
                <option>User support</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="form.terms">
              I agree to the <a class="button" href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div class="field"> 
          <label>
            <strong>What dev concepts are you interested in?</strong>
          </label>
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="form.concepts"
                value="promises">
              Promises
            </label> 
            <label class="checkbox">
              <input type="checkbox" v-model="form.concepts" 
                value="testing">
              Testing
            </label>
          </div>
        </div>
        <div class="field">
          <label><strong>Is JavaScript awesome?</strong></label>
          <div class="control">
            <label class="radio">
              <input v-model="form.js_awesome" type="radio" value="Yes">
              Yes
            </label>
            <label class="radio">
              <input v-model="form.js_awesome" type="radio" value="No">
              No
            </label>
          </div>
        </div>
      </div>
      <button 
        :disabled="false"
        class="button">
        Submit
      </button>
    </form>
    <div class="column">
      <section class="section" id="results">
        <div class="box">
          <ul>          
            Results:
            <li v-for="(item, k) in form" :key="k">
              <div v-show="item && item.length != 0"><strong>{{ k }}:</strong> {{ item }}</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
	name: "Form",
	data() {
    return {
    	form: {
    		name: '',
        message: '',
        inquiry_type: '',
        logrocket_usecases: [],
        terms: false,
        concepts: [],
        js_awesome: '',
    	},
      options:{
        inquiry:[
          { value: 'test1', text: 'testtext1' },
          { value: 'test2', text: 'testtext2' },
          { value: 'test3', text: 'testtext3' },
        ],
      },
      msg: 'Advance A/C',
    };
  },
  methods: {
    consoleLog(m){
      return console.log(m);
    },
  }
};
</script>
<style lang="scss" scoped>
.form{
  color: #fff;
  background-color: #2b2b2b;
  .form-options{
  }
  .box{
    ul{
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
