namespace API.Entities
{
    public class BaskItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }
    }
}