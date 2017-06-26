using ApiCarRental;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace CarrentalWeb.Controllers
{
    public class MarcasController
    {
        // GET: api/Marcas
        public RespuestaAPI Get()
        {
            RespuestaAPI resultado = new RespuestaAPI();
            List<Marca> marca = new List<Marca>();
            try
            {
                Db.Conectar();

                if (Db.EstaLaConexionAbierta())
                {
                    marca = Db.GetMarca();
                }
                resultado.error = "";
                Db.Desconectar();
            }
            catch (Exception ex)
            {
                resultado.error = "Se produjo un error";
            }

            resultado.totalElementos = marca.Count;
            resultado.dataMarcas = marca;
            return resultado;
        }

        // GET: api/Marcas/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Marcas
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Marcas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Marcas/5
        [HttpDelete]
        public RespuestaAPI Delete(int id)
        {
            RespuestaAPI resultado = new RespuestaAPI();
            int filasAfectadas = 0;
            try
            {
                Db.Conectar();

                if (Db.EstaLaConexionAbierta())
                {
                    filasAfectadas = Db.EliminarMarca(id);
                }
                resultado.error = "";
                Db.Desconectar();
            }
            catch (Exception ex)
            {
                resultado.error = "Se produjo un error";
            }

            resultado.totalElementos = filasAfectadas;
            resultado.dataMarcas = null;
            return resultado;
        }
    }
}
