import CraftathonPartnership from './components/whyHack'
import Navbar from './components/navbar';
import Perks from './components/perk';
import CraftathonSupport from './components/contribute';
import ContactSection from './components/connect';
import Footer from './components/footer';
import Contactus from './components/contactus';

const Items = [
  {href:'',text:'Partnership'},
    { href: '', text: 'Discover perks' },
    { href: '#', text: 'Contribution' },
    { href: '#', text: "Let's Connect" }
  ];
const Sponsorus = () => {
    return (
        
<>
 <Navbar menuItems={Items}/>
 <CraftathonPartnership/>
 <Perks/>
 <CraftathonSupport/>
 <ContactSection/>
 <Contactus/>
 <Footer/>
</>

    );
  };
  
  export default Sponsorus ;