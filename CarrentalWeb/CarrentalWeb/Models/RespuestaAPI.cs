using ApiCarRental;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarrentalWeb
{
    public class RespuestaAPI
    {
        public string error { get; set; }
        public int totalElementos { get; set; }
        public List <Usuarios> dataUsuario { get; set; }
        public List<Marca> dataMarcas { get; set; }
    }
}