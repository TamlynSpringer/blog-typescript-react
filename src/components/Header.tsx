const Header = () => {
  return (
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <span className='container-fluid'>
        <h1 className=''>Tiny Blog  </h1>
        <img className='img-header' src={"https://doodleipsum.com/100x100/hand-drawn?&n="+new Date().getTime()} alt='random doodle'/>
      </span>
    </nav>
  )
};

export default Header;