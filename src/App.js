import './App.css';
import Counter from './components/Counter/Counter';
// import ButtonChanger from './components/ButtonChanger';
// import Container from './components/Container';
// import Input from './components/Input';
import Profile from './components/EditProfile/Profile';
import Items from './components/Exercises/Items';
import LoginForm from './components/Exercises/LoginForm';
import CharacterCounter from './components/Exercises/TextChange';
import User from './components/Exercises/Students';
import Cart from './components/ShoppingCart/Cart';
import Students from './components/Exercises/Students';
import CommentSection from './components/Exercises/CommentSection';
import Dropdown from './components/Exercises/DropDown';
import Toggle from './components/Exercises/Toggle';
import ColorPicker from './components/Exercises/ColorPicker';
import Checkbox from './components/Exercises/CheckBox';
import Increment from './components/Exercises/Counter';
import PasswordInput from './components/Exercises/Password';
import Tabs from './components/Exercises/Tabs';
import Slider from './components/Exercises/Slider';
import PasswordStrengthMeter from './components/Exercises/PasswordStrength ';
import Opener from './components/Exercises/Opener';


function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className="App">
      <Items />
      <LoginForm />
      <Students />
      <CharacterCounter />
      <CommentSection />
      <Dropdown options={options} />
      <Toggle />
      <ColorPicker />
      <Checkbox />
      <Increment />
      <PasswordInput />
      <Tabs />
      <Slider min={0} max={100}/>
      <PasswordStrengthMeter />
      <Opener />
    </div>
  );
}

export default App;
