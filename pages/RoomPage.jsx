
const RoomPage =({setIsAuth, setRoom}) => {
      // oturumu Kapat
    const logout = () => {
        // state günceller
        setIsAuth(false)

        // lokalden Kaldır
        localStorage.removeItem('TOKEN');


    }

    // odaya gir
const handleSubmit = (e) => {
   
    e.preventDefault();

    // oda ismini inputtan al
    const roomName = e.target[0].value;

    // state günceller
    setRoom(roomName);


}

    return(

        <form onSubmit={handleSubmit} className="room-page">
            <h1>Chat Odası</h1>
            <p>Hangi Odaya Gireceksiniz</p>
            <input type="text" placeholder="örn:Ders Grup" />
            <button type="submit">Odaya Gir</button>
            <button type="button" onClick={logout}>Çıkış Yap</button>

        </form>
    )
}

export default RoomPage