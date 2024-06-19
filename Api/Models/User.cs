// Models/Product.cs
using Microsoft.EntityFrameworkCore;

public class User
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Password { get; set; }
    public required UserType UserType{get; set;}
}

