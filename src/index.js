
const rootElement = document.getElementById('root');
        const element = <div></div>
        ReactDOM.render(element, rootElement);

        function Header() {
          return(<div>
             <div>
              <div>
    <nav className="nav">
   <header className="img">
        <a
          href="https://pixabay.com/users/billithecat-7996303/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img className="image" src="https://pixabay.com/get/g1e095f8e99ba5eef7cf49c42b6f745c56f0a569378274acedf1e5c2ed7b088ee63b520fd9d7b9e3c5fa032b3767aecf4.svg" height="50%" width="50%" alt="Sand-wishes" />
        </a>
      </header>
   
    <ul className="nav-item">
    <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
    </nav>
    <h1>Soup & Wishes</h1></div>
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
