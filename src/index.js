
const rootElement = document.getElementById('root');
        const element = <div></div>
        ReactDOM.render(element, rootElement);

        function Header() {
          return(<div>
             <div>
              <div>
    <nav className="nav">
   <img src="src/img.png"  alt="sandwich"/>
   <p><small>
        Image credit: 
        {' '}
        <a
          href="https://pixabay.com/users/billithecat-7996303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Billi the Cat
        </a>
     </small> </p>
   
    <ul className="nav-item">
    <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
    </nav>
    <h1>Soup & Sand-Wishes</h1></div>
  </div>
          </div>
            
          )
        };
        function MainContent() {
          return(
            <div>
            <h2>Popular Menu Items</h2>
            <h3>SandWishes</h3>
      <ol>
        <li>Three Cheese (your choice)</li>
        <li>Wishes of Muenster</li>
        <li>Feta</li>
        <li>Classic Cheddar</li>
      </ol>
      <h3>Soups</h3>
      <ol>
        <li>Tomato Bisque</li>
        <li>Hungarian Mushroom</li>
        <li>Vegetable</li>
        <li>Tortilla</li>
      </ol>
   </div>
          )
        };
        function Footer() {
          return(
            <div>
              <footer>
      <small>© 20xx Kay's Coding development. All rights reserved.</small>
      <small></small>
</footer>
            </div>

          )
        }

function TempName() {
  return (
<div>
  <Header />
<MainContent />
     <Footer />
    </div> )
};


ReactDOM.render(<TempName />, document.getElementById('root'));
