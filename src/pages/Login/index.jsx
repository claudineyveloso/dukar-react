import React, { useState, useContext  } from 'react';
import { Link, NavLink  } from "react-router-dom";
import styled from 'styled-components';

import { AuthContext  } from '../../contexts/auth';
import logoDukar from '../../../src/images/logo-dukar-selo.png';
import loginImg from '../../../src/images/login-img.png';

const Logo = styled.img`
  height: 80px;
  display: block;
  margin: 0 auto;
`;


const Login = () => {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
  }

  const togglePassword = () => {
    if(passwordType==="password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    }
    catch (e) {
//alertMessage('Usuário ou senha inválidos', 5500, 'error')
      console.log('esse é o erro mencionado', e)
    }
  }


  return(
    <div className="auth-page">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          <div className="col-xxl-4 col-lg-4 col-md-6">
            <div className="row justify-content-center g-0">
              <div className="col-xl-9">
                <div className="p-4">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="auth-full-page-content rounded d-flex p-3 my-2">
                        <div className="w-100">
                          <div className="d-flex flex-column h-100">
                            <div className="mb-4 mb-md-5">
                              <a href="index.html" className="d-block auth-logo">
                                <Logo src={logoDukar} />
                              </a>
                            </div>
                            <div className="auth-content my-auto">
                              <div className="text-center">
                                <h5 className="mb-0">Bem Vindo!</h5>
                                <p className="text-muted mt-2">Login para continuar na Dukar.</p>
                              </div>
                              <form className="mt-4 pt-2" onSubmit={handleSumit}>
                                <div className="form-floating form-floating-custom mb-4">
                                  <input type="text" className="form-control" id="input-username" placeholder="Digite o CPF" required=''/>
                                  <label htmlFor="input-username">CPF</label>
                                  <div className="form-floating-icon">
                                    <i data-eva="people-outline"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-people-outline">
                                      <g data-name="Layer 2">
                                        <g data-name="people">
                                          <rect width="24" height="24" opacity="0"></rect>
                                          <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                                          <path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path>
                                          <path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>

                                <div className="form-floating form-floating-custom mb-4 auth-pass-inputgroup">
                                  <input type={passwordType} className="form-control pe-5" placeholder="Digite a senha" onChange={handlePasswordChange}/>
                                  <button type="button" className="btn btn-link position-absolute h-100 end-0 top-0" onClick={togglePassword}>
                                    <i className="mdi mdi-eye-outline font-size-18 text-muted"></i>
                                  </button>

                                  <label htmlFor="input-password">Senha</label>
                                  <div className="form-floating-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-lock-outline">
                                      <g data-name="Layer 2">
                                        <g data-name="lock">
                                          <rect width="24" height="24" opacity="0"></rect>
                                          <path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"></path>
                                          <path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <i data-eva="lock-outline"></i>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col">
                                    <div className="form-check font-size-15">
                                      <input className="form-check-input" type="checkbox" id="remember-check" />
                                      <label className="form-check-label font-size-13" htmlFor="remember-check">
                                        Remember me
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <button className="btn btn-success w-100 waves-effect waves-light" type="submit">Acessar</button>
                                </div>
                              </form>
                              <div className="mt-4 pt-3 text-center">
                                <p className="text-muted mb-0">Não tem acesso ao Dashboar? <a href="auth-register.html" className="text-success fw-semibold"> Entre em contato com o Administrador  </a> </p>
                              </div>
                            </div>
                            <div className="mt-4 text-center">
                              <p className="mb-0">© <script>document.write(new Date().getFullYear())</script>2023 AIC - Consultoria e Sistemas Lida.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-8 col-lg-8 col-md-6 mt-4">
              <div className="auth-bg bg-white py-md-5 p-4 d-flex">
                  <div className="bg-overlay bg-white"></div>
                  {/* <!-- end bubble effect --> */}
                  <div className="row justify-content-center align-items-center">
                      <div className="col-xl-8">
                          <div className="mt-4">
                              <img src={loginImg} className="img-fluid" alt="" />
                          </div>
                          <div className="p-0 p-sm-4 px-xl-0 py-5">
                              <div id="reviewcarouselIndicators" className="carousel slide auth-carousel" data-bs-ride="carousel">
                                  <div className="carousel-indicators carousel-indicators-rounded">
                                      <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                                      <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                                      <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                                  </div>
                                  {/* <!-- end carouselIndicators --> */}
                                  <div className="carousel-inner w-75 mx-auto">
                                      <div className="carousel-item">
                                          <div className="testi-contain text-center">
                                              <h5 className="font-size-20 mt-4">"Visão"</h5>
                                              <p className="font-size-15 text-muted mt-3 mb-0">Ser referência na gestão de documentos automotivos, sendo reconhecida como a líder no mercado frotista.</p>
                                          </div>
                                      </div>

                                      <div className="carousel-item">
                                          <div className="testi-contain text-center">
                                              <h5 className="font-size-20 mt-4">"MISSÃO"</h5>
                                              <p className="font-size-15 text-muted mt-3 mb-0">
                                                Atender as necessidades de nossos clientes, desenvolvendo soluções que possibilitam a prestação de serviço ágil e eficiente, em um ambiente de confiança.
                                              </p>
                                          </div>
                                      </div>

                                      <div className="carousel-item active">
                                          <div className="testi-contain text-center">
                                              <h5 className="font-size-20 mt-4">VALORES</h5>
                                              <p className="font-size-15 text-muted mt-3 mb-0">
                                                Ética, Rapidez, Eficiência, Segurança, Resolubilidade, Disponibilidade, Responsabilidade e Comprometimento
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  {/* <!-- end carousel-inner --> */}
                              </div>
                              {/* <!-- end review carousel --> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
