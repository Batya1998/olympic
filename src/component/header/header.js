import  {Nav, Navbar,Form,FormControl,Button} from 'react-bootstrap'
const Header=()=>{

    return (
        <div>
        <Navbar bg="warning" expand="lg" className="hederNavBar">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="Home">Home</Nav.Link>
      <Nav.Link href="About">About</Nav.Link>
      <Nav.Link href="Registration">Registration</Nav.Link>
     
    </Nav>
    <Nav className="ms-auto">
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
 
    
    )
}
export default Header;