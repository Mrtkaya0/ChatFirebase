import { auth } from "../firebase/config";



const Message = ({ data }) => {
    // data.author.uid değerini yazdırarak kontrol et
    console.log("Author UID:", data.author.uid);
  
    // eğer data.author.uid tanımlı ise ve oturum açık olan kişinin id'si ile eşleşiyorsa
    if (auth.currentUser.uid === data.author.uid) {
        return <p className="msg-user">{data.text}</p>;
      }
  
    // değilse, başka bir kullanıcı tarafından yazılan mesajı göster
    return (
        <div className="msg-other">
          <p className="user-info">
            <img src={data.author.photo} />
            <span>{data.author.name}</span>
          </p>
          <p className="msg-text">{data.text}</p>
    </div>
  );
};
  
  export default Message;