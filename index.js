  class Car {
    constructor(count, currentState) {
      this.count = 0
      this.currentState = new Red(this)
    }

    change (state) {
      if (this.count++ >= 10) {
        return
      }
      this.currentState = state
      this.currentState.go()
    }

    start () {
      this.currentState.go()
    }
  }

  class Red  {
    constructor(state) {
    this.state = state
  }

    go () {
      console.log('Red -> for 1 minute')
      this.state.change(new Green(this.state))
    }

  }

  class Green  {
    constructor(state) {
      this.state = state
    }

      go () {
          console.log('Green -> for 1 minute')
          this.state.change(new Yellow(this.state))
      }
  }

  class Yellow  {
    constructor(state) {
      this.state = state
    }

      go () {
          console.log('Yellow -> for 10 minute')
          this.state.change(new Red(this.state))
      }
  }

  const run = () => {
      const car = new Car()
      car.start()

  }
  run()
