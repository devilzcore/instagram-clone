import React from 'react';
import { Button, FormControl, InputLabel } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import './App.css';

let Phone = require("./assets/phone_preview.png")
let Logo = require("./assets/logo.png")
let Google = require("./assets/google_play.png")
let Apple = require("./assets/app_store.png")
let Facebook = require("./assets/fb_icon.png")
// let Icon = require("./assets/icon.png")

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiInputBase-input': {
    width: 268,
    height: 30,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    // width: 'auto',
    // padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="phone">
          <img src={Phone} alt="" />
        </div>
        <div className="personal">
          <div className="login">
            <img src={Logo} alt="" />
            <FormControl variant="filled">
              <InputLabel id="input-label" htmlFor="component-filled">Telefone, nome de usuário ou email</InputLabel>
              <BootstrapInput defaultValue="" id="bootstrap-input" />
            </FormControl>
            <FormControl variant="filled">
              <InputLabel id="input-label" htmlFor="component-filled">Senha</InputLabel>
              <BootstrapInput defaultValue="" id="bootstrap-input" />
            </FormControl>
            <Button className="button" id="button-ui" variant="contained" size="small">Entrar</Button>
            <div className="separator-or">
              <div className="line"></div>
              <p>Ou</p>
              <div className="line"></div>
            </div>
            <div className="fb">
              <img src={Facebook} alt="" />
              <a href="/index.html">Entrar com o Facebook</a>
            </div>
            <a href="/index.html">Esqueceu a senha?</a>
          </div> <br />
          <div className="register">
            <p>Não tem uma conta?</p>
            <a href="/index.html">Cadastre-se</a>
          </div>

          <p>Obtenha o aplicativo.</p>
          <div className="plataform">
            <img src={Google} alt="" />
            <img src={Apple} alt="" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <ul>
          <li>Meta</li>
          <li>Sobre</li>
          <li>Blog</li>
          <li>Carreira</li>
          <li>Ajuda</li>
          <li>API</li>
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Principais Contas</li>
          <li>Hashtags</li>
          <li>Localizações</li>
          <li>Instagram Lite</li>
          <li>Carregamento de contatos e não usuários</li>
          <li>Dança</li>
          <li>Comida e bebida</li>
          <li>Casa e jardim</li>
          <li>Música</li>
          <li>Artes visuais</li>
        </ul>
        <ul>
          <li>Idioma</li>
          <li>© 2022 Instagram from Meta</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
