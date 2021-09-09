
import { Component } from "react";
import { Container, Form } from "react-bootstrap"
import { withRouter } from "react-router";
class Registration extends Component{
   constructor(props){
      super();
      this.state={
         name:'',
         age:0,
         gender:'',
         country:'',
         category:'',
         vaccinationStatus:'',
         previousMedalHistory:{
            gold:0,
            silver:0,
            bronze:0
         }
         
      }
}

onRegistrationComplete=()=>{
   //this.props.history.push('detail');
   console.log("state",this.state)
}
render() {
   return(
       <Container>
    <Form>
    <Form.Group className="col-sm-6" >
        <Form.Label >Participant Name</Form.Label>
        <Form.Control onChange={(e)=>{this.setState({name:e.target.value})}} size="sm" type="text"></Form.Control>
    </Form.Group>
    <Form.Group className="col-sm-6" >
       <Form.Label >Age</Form.Label>
       <Form.Control size="sm" type="number" onChange={(e)=>{this.setState({age:e.target.value})}}></Form.Control>
    </Form.Group>
    <Form.Group className="col-sm-6" >
    <Form.Label >Gender</Form.Label>
       <div className="d-flex" >
       
       <div className="d-flex" style={{width:'50%'}}>
       <Form.Check value="female" onChange={(e)=>{this.setState({gender:e.target.value})}} type="radio" name="gender" aria-label="Male" style={{width:'15%'}} ></Form.Check>
       <Form.Check.Label style={{width:'10%'}}>Male</Form.Check.Label>
       </div>
       <div className="d-flex" style={{width:'50%'}}>
       <Form.Check value="female" onChange={(e)=>{this.setState({gender:e.target.value})}} type="radio" name="gender" aria-label="Female" style={{width:'15%'}} ></Form.Check>
       <Form.Check.Label style={{width:'10%'}}>Female</Form.Check.Label>
       </div>
       <div className="d-flex" style={{width:'50%'}}>
       <Form.Check value="female" onChange={(e)=>{this.setState({gender:e.target.value})}} type="radio" name="gender" aria-label="Other" style={{width:'15%'}} ></Form.Check>
       <Form.Check.Label style={{width:'10%'}}>Other</Form.Check.Label>
       </div>
       </div>
    </Form.Group>
   <Form.Group className="col-sm-6">
   <Form.Label >Country</Form.Label>
      <Form.Select onChange={(e)=>{this.setState({country:e.target.value})}}>
         <option>Select Country</option>
         <option value="India">India</option>
         <option value="China">China</option>
         <option value="USA">USA</option>
         <option value="Japan">Japan</option>
         <option value="UK">UK</option>
      </Form.Select>
   </Form.Group>
   <Form.Group className="col-sm-6">
   <Form.Label >Category</Form.Label>
      <Form.Select onChange={(e)=>{this.setState({category:e.target.value})}}>
         <option>Select Category</option>
         <option value="100 meter race">100 meter race</option>
         <option value="swiming">swiming</option>
         <option value="Hocky">Hocky</option>
         <option value="weight lifting">weight lifting</option>
         <option value="javline">javline</option>
      </Form.Select>
   </Form.Group>
   <Form.Group className="col-sm-6" >
      
       <Form.Label >Is vaccinated?</Form.Label>
       <div className="d-flex">
       <div className="d-flex" style={{width:'50%'}}>
       <Form.Check type="radio" onChange={(e)=>{this.setState({vactination:e.target.value})}} name="vactination" value="complete" aria-label="Complete" style={{width:'15%'}} ></Form.Check>
       <Form.Check.Label style={{width:'10%'}}>Complete</Form.Check.Label>
       </div>
       <div className="d-flex" style={{width:'50%'}}>
       <Form.Check type="radio" onChange={(e)=>{this.setState({vactination:e.target.value})}} name="vactination" value="Partial" aria-label="Partial" style={{width:'15%'}} ></Form.Check>
       <Form.Check.Label style={{width:'10%'}}>Partial</Form.Check.Label>
       </div>
       <div className="d-flex" style={{width:'50%'}}>
       <Form.Check type="radio" onChange={(e)=>{this.setState({vactination:e.target.value})}} name="vactination" value="Notyet" aria-label="Notyet" style={{width:'15%'}} ></Form.Check>
       <Form.Check.Label style={{width:'10%'}}>Notyet</Form.Check.Label>
       </div>
       </div>
       </Form.Group>

       <Form.Group className="col-sm-6 mt-2">
          <Form.Label>Previous Medal History</Form.Label>
          <div className="d-flex">
             <div className="d-flex">
                 <Form.Label style={{width:'25%'}}>Gold</Form.Label>
                 <Form.Control size="sm" onChange={(e)=>{this.setState({previousMedalHistory:{...this.state.previousMedalHistory,gold:e.target.value }})}} type="number" style={{width:'40%'}}></Form.Control>
             </div>
             <div className="d-flex">
                 <Form.Label style={{width:'25%'}}>Silver</Form.Label>
                 <Form.Control size="sm"onChange={(e)=>{this.setState({previousMedalHistory:{...this.state.previousMedalHistory,Silver:e.target.value }})}} type="number" style={{width:'40%'}}></Form.Control>
             </div>
             <div className="d-flex">
                 <Form.Label style={{width:'25%'}}>Bronze</Form.Label>
                 <Form.Control size="sm"onChange={(e)=>{this.setState({previousMedalHistory:{...this.state.previousMedalHistory,Bronzed:e.target.value }})}} type="number" style={{width:'40%'}}></Form.Control>
             </div>
             

          </div>
        <div>
       <button className="mt-5 button-style"   onClick={this.onRegistrationComplete}>Registration</button>
       </div>
      
    </Form.Group>

    
  </Form>
  </Container>
   )
}   
}
export default withRouter(Registration)