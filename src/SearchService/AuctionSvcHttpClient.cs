using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Services;

public class AuctionSvcHttpClient
{
    public AuctionSvcHttpClient(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _configuration = configuration;
    }

    public async Task<List<Item>> GetItemForSearchDb()
    {
        var lastUpdated = await DB.Find<Item, string>()
        .Sort(c => c.Descending(c => c.UpdatedAt))
        .Project(c => c.UpdatedAt.ToString())
        .ExecuteFirstAsync();

        return await _httpClient.GetFromJsonAsync<List<Item>>(_configuration["AuctionServiceUrl"] + "/api/auctions?date=" + lastUpdated);
    }


    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;
}
