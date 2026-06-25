import React, {useState} from "react";

const ChatBot = () => {

const [messages,setMessages] = useState([]);
const [input,setInput] = useState("");

const sendMessage = () => {

let reply = "Sorry I didn't understand";

if(input.toLowerCase().includes("delivery")){
reply = "Delivery takes 3-5 days";
}

if(input.toLowerCase().includes("return")){
reply = "Return policy is 7 days";
}

setMessages([
...messages,
{user:true,text:input},
{user:false,text:reply}
]);

setInput("");

};

return (

<div className="fixed bottom-5 right-5 bg-white shadow p-4 w-72">

<div className="h-60 overflow-y-auto">

{messages.map((msg,i)=>(
<p key={i} className={msg.user ? "text-right":"text-left"}>
{msg.text}
</p>
))}

</div>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
className="border w-full p-2"
/>

<button onClick={sendMessage} className="bg-black text-white w-full mt-2 p-2">
Send
</button>

</div>

);

};

export default ChatBot;