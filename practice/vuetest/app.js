const app = Vue.createApp({
    data(){
        return{
            name:"",
            fullName:'', // s030 使用 watch:
            lastName:'', // s030 使用 watch:
        }
    },
    methods:{
        // s027  將上面的 input 重置
        resetInput(){
            this.name = "";
            this.lastName = "";
        },
        // s028 Data binding method
        outputFullname(){
            console.log('outputFullname.......')
            if(this.name===''){
                return '';
            }else{
                return this.name+'  '+'OhMyGod';
            }
        },
    },
    computed:{
        outputFullnameComputed(){
            console.log('outputFullnameComputed.......')
            if(this.name==='' || this.lastName === ''){
                return '';
            }else{
                return this.name+'  '+this.lastName;
            }
        },
    },
    // s030 使用 watch:
    watch:{
        // 取一個 data 已經存在的名稱，同名方法
        // 就是告訴 vue 只要name資料改變，就會執行內容
        name(value){ // 預設 value 參數(命稱可任意命名)，內容就等於 this.name
            console.log('watch name()...')
            console.log('value:'+value);
            if(this.name===''){
                this.fullName = '';
            }else{
                // this.fullName = this.name + ' ' +'Watch Name';
                this.fullName = this.name + ' ' +this.lastName;
            }
            console.log('fullname:'+this.fullName);
        },
        // s030 使用 watch:
        lastName(value){
            console.log('watch lastName()...')
            console.log('value:'+value);
            if(this.name===''){
                this.fullName = '';
            }else{
                this.fullName = this.name + ' ' +value;
            }
            console.log('fullname:'+this.fullName);
        },
    },
});

// 誰要被這個 app 控制? 使用 css selector  #abc  是 抓id  .abc 是抓class
app.mount('#myevent'); 