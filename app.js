const app = Vue.createApp({
  data() {
    
    return {
      enteredGoalValue: "",
      goals: []
     };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }, // Add a comma here
  },
});

app.mount('#user-goals');
  
