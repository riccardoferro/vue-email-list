// -Generate 10 email addresses and print them in a list, taking it from this API https://flynn.boolean.careers/exercises/api/random/mail

//app VUE
const app = new Vue({
  el: '#root',
  data: {
      mails:[],
  },
  methods: {
    getMail(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                //before we have call it responde but we need only status and data
                //i'll take the datas that i need from the API
                //restructuring
                ({status,data})=> {
                    console.log(data);
                    if (status===200 && data.success){
                        this.mails.push(data.response);
                    }
                    //here we force the code to call the API till we get 10 email address, for this 
                    // we don't had use a cycle,
                    if (this.mails.length < 10){
                        this.getMail();
                    }
                }
      )
    }
  },
  mounted() {
    this.getMail();
  }
})