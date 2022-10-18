public class ShoppingCart {
  private int itemsCount;
  private double totalPrice;
  private List<ShoppingCart> items = new ArrayList<>();

  public int getItemsCount() {
    return this.itemsCount
  }

  public void setItemsCount(int itemsCount) {
    this.itemsCount = itemsCount;
  }

  public double getTotalPrice() {
    return this.totalPrice;
  }

  public void setTotalPrice(double totalPrice) {
    this.totalPrice = totalPrice;
  }

  public List<ShoppingCartItem> getItems() {
    return Collections.unmodifiableList(this.items)
  }

  public void addItem(ShoppingCartItem item) {
    items.add(item);
    itemsCount++;
    totalPrice += item.getPrice();
  }

  public void clear() {
    items.clear();
    itemsCount = 0;
    totalPrice = 0.0;
  }
}