
const rootElement = document.getElementById('root');
        const element = <div></div>
        ReactDOM.render(element, rootElement);

        function Header() {
          return(<div>
             <header>
    <nav>
    <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" width="40px" />
    </nav>
  </header>
          </div>
            
          )
        };
        function MainContent() {
          return(
            <div>
            <h1>Fun Facts About Kay</h1>

    <ul>
      <li>I have lived in some very interesting places. P.N.G., Buckland, Girdwood, etc</li>
      <li>I have a wide variety of certificates and licenses including but not limited to a Pilots License, Cosmetology Licenses in multiple states, Realtor License...</li>
      <li>I love to cook.  Transforming food is one of the most fun things I can think of.</li>
     </ul></div>
          )
        };
        function Footer() {
          return(
            <div>
              <footer>
      <small>© 20xx Kay's Coding development. All rights reserved.</small>
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
