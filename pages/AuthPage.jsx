import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase/config";

const AuthPage = ({ setIsAuth }) => {

    // giriş yap butonuna tıklanınca
    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                // oturumun açık olduğunu uygulamada yönetmek için lokale 
                localStorage.setItem('TOKEN', res.user.refreshToken);

                // Kullanıcı yetkisini true çek
                setIsAuth(true);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <div className="auth">
                <img src="/chat.png" alt="" />
                <h1>Chat Odası</h1>
                <p>Devam Etmek İçin Giriş Yapın</p>
                <button onClick={handleClick} >
                    <img src="/log.png" alt="" />
                    <span>Google İle Gir</span>
                </button>
            </div>
        </div>
    );
}

export default AuthPage;