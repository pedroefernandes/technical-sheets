package com.example.demo.model;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double quantity;
    private Double cost;

    // Getters e Setters
    public Long getId() {
      return id;
  }

  public void setId(Long id) {
      this.id = id;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
  }

  public Double getQuantity() {
      return quantity;
  }

  public void setQuantity(Double quantity) {
      this.quantity = quantity;
  }

  public Double getCost() {
      return cost;
  }

  public void setCost(Double cost) {
      this.cost = cost;
  }
}
