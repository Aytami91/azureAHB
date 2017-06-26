using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarrentalWeb
{
    public class Usuario
    {
        public int idUsuario { get; set; }
        public string email { get; set; }
        public string nif { get; set; }
        public string password { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public DateTime fechaNacimiento { get; set; }
        
    }
}
