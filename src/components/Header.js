import Button from "./button"

const Header = () => {
   const onClick=() =>{
    console.log('click');
   }
  return (
    <header className="header">
        <h1 >
            Task Tracker
        </h1>
        <Button text="Add" onClick={onClick}></Button>
    </header>
  )
}

export default Header