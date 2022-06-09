using _67OorahScraping.Scraping;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _67OorahScraping.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OorahPrizeController : ControllerBase
    {
        [HttpGet]
        [Route("scrape")]
        public List<Prize> Scrape()
        {
            return OorahScraper.Scrape();
        }
        [HttpGet]
        [Route("getmyprize.br=lajSk!u,irm=jadfbmnadsakllll..7")]
        public Prize GetRandomPrize()
        {
            return OorahScraper.GetRandomPrize(Scrape());
        }
    }
}
