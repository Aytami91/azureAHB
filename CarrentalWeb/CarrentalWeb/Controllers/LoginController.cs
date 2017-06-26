using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarrentalWeb
{
    public class LoginController : ApiController
    {
        [HttpGet]
        // GET: api/Login
        public RespuestaAPI Get([FromBody]Login login)
        {
            RespuestaAPI resultado = new RespuestaAPI();
            List<Usuario> usuarios = new List<Usuario>();
            try
            {
                Db.Conectar();

                if (Db.EstaLaConexionAbierta())
                {
                    usuarios = Db.GetUsuarios();
                }
                resultado.error = "";
                Db.Desconectar();

            }
            catch (Exception ex)
            {
                resultado.error = "Se produjo un error";
            }

            resultado.totalElementos = usuarios.Count;
            resultado.dataUsuario = usuarios;
            return resultado;
        }

        // GET: api/Login/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Login
        [HttpPost]
        public RespuestaAPI Post([FromBody]Login login)
        {
            RespuestaAPI resultado = new RespuestaAPI();
            List<Usuario> usuarios = new List<Usuario>();
            try
            {
                Db.Conectar();

                if (Db.EstaLaConexionAbierta())
                {
                    usuarios = Db.Login(login.email, login.password);
                }
                resultado.error = "";
                Db.Desconectar();
                
            }
            catch (Exception ex)
            {
                resultado.error = "Se produjo un error";
            }

            resultado.totalElementos = usuarios.Count;
            resultado.dataUsuario = usuarios;
            return resultado;
        }

        // PUT: api/Login/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Login/5
        public void Delete(int id)
        {
        }
    }
}
