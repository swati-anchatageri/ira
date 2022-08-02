import React, { useRef, useState } from 'react';
import './Chat.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Button, Card, CardBody,CardHeader} from 'shards-react';

firebase.initializeApp({
  apiKey: "AIzaSyDbBHW0OMhDKMNi0gkwTqpW3TlbXNU1wlA",
  authDomain: "midyear-castle-354304.firebaseapp.com",
  projectId: "midyear-castle-354304",
  storageBucket: "midyear-castle-354304.appspot.com",
  messagingSenderId: "511722768998",
  appId: "1:511722768998:web:6e1a626c0a73b5b8c83ba7",
  measurementId: "G-JCMMT0Z9CX"
})


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Chat(){
    
    const [user] = useAuthState(auth);
  return (
    <div className="Chat">
    <Card>
    <CardBody>
      <CardHeader>
        <h5>Start Live Chat</h5>
        <SignOut />
      </CardHeader>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
      </CardBody>
      </Card>
    </div>
  );

}

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <Button style={{ color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        size:"150",
        fontSize: "1.25rem"}} className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
    )
  }
  
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main style={{padding:"flex", height:"80vh", margin:"10vh 0 10vh", overflowY:"scroll",display:"flex",
    flexDirection:"column", webkitScrollbar:{width:"0.25"}, webkitScrollbarTrack:{background:"#1e1e24"}, webkitScrollbarThumb:{background:"#6649b8"} }}>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage} style={{height: "10vh",
    position: "fixed",
    bottom: "0",
    backgroundColor: "rgb(24, 23, 23)",
    width: "21.5%",

    display: "flex",
    fontSize: "1.5rem"}}>
  
        <input style={{lineHeight: "1.5rem",
    width: "80%",
    fontSize: "1.5rem",
    background: "rgb(58, 58, 58)",
    color: "white",
    outline: "none",
    border: "none",
    padding: "0 10px"}} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <Button style={{width: "20%",
    backgroundColor: "rgb(56, 56, 143)"}} type="submit" disabled={!formValue}>Send</Button>
  
      </form>
    </>)
  }
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213.jpg'} alt="" style={{width:"40px", height:"40px", borderRadius:"50%", margin:"2px 5px"}}/>
        <p style={{maxWidth: "500px",
    marginBottom: "12px",
    lineHeight: "24px",
    padding: "10px 20px",
    borderRadius: "25px",
    position: "relative",
    color: "white",
    textAlign: "center"}}>{text}</p>
      </div>
    </>)
  }

  export default Chat;