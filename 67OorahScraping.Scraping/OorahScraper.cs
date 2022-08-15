using AngleSharp.Html.Parser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace _67OorahScraping.Scraping
{
    public class OorahScraper
    {
        public static List<Prize> Scrape()
        {
            string html = GetOorahHtml();
            return ParseOorahHtml(html);
        }
        public static Prize GetRandomPrize(List<Prize> prizes)
        {
            var random = new Random();
            var index = random.Next(0, prizes.Count);
            return prizes[index];
        }
        private static string GetOorahHtml()
        {
            var handler = new HttpClientHandler
            {
                AutomaticDecompression = System.Net.DecompressionMethods.GZip | System.Net.DecompressionMethods.Deflate
            };
            using var client = new HttpClient(handler);
            var url = "https://www.oorahauction.org";
            return client.GetStringAsync(url).Result;
        }

        private static List<Prize> ParseOorahHtml(string html)
        {
            var parser = new HtmlParser();
            var document = parser.ParseDocument(html);
            var prizeDivs = document.QuerySelectorAll(".portfolio-item");
            var prizes = new List<Prize>();
            foreach (var div in prizeDivs)
            {
                var prize = new Prize();

                var imageTag = div.QuerySelector(".img-responsive");
                if(imageTag == null)
                {
                    continue;
                }
                if(imageTag != null)
                {
                    var url = "https://www.oorahauction.org/";
                    url += imageTag.Attributes["src"].Value;
                    prize.ImageUrl = url;
                }

                var titleSpan = div.QuerySelector(".portfolio-caption").FirstElementChild;
                if (titleSpan == null)
                {
                    continue;
                }
                if (titleSpan != null)
                {
                    prize.Title = titleSpan.TextContent;
                }

                var winnerSpan = div.QuerySelector(".portfolio-caption").LastElementChild;
                if (winnerSpan == null)
                {
                    continue;
                }
                if (winnerSpan != null)
                {
                    prize.Winner = winnerSpan.TextContent;
                }

                prizes.Add(prize);
            }
            return prizes;
        }
    }
}

