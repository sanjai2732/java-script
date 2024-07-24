// ES6 module
export class Car{
    drive(){
        console.log("Driving")
    }
}
export function finder(){
    console.log("Finding")
}
export function submit(){
    console.log("submiting")
}
export default  class Student{
    constructor(name,dept){
        this.name=name
        this.dept=dept
    }
    login(){
        console.log(`Name of the Student ${this.name} ,Department of "${this.dept}"`)
    }
}
//--------another way to export-------------
// export default Car ,only one default value is acess
// export default Student
// export{Car}
// export {finder,submit}