package com.example.demo.model;

import lombok.Data;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class FichaTecnica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "ficha_tecnica_id")

    private List<Ingredient> ingredients = new ArrayList<>();


    private Double totalCost;
    private Double suggestedPrice;


    public FichaTecnica() {  }

    public FichaTecnica(String name, Double suggestedPrice, Double totalCost, List<Ingredient> ingredients) {
      super();
      this.name = name;
      this.suggestedPrice = suggestedPrice;
      this.totalCost = totalCost;
      this.ingredients = ingredients;
    }

    public FichaTecnica(String name, Double suggestedPrice, Double totalCost, Ingredient ingredient) {
      this.name = name;
      this.suggestedPrice = suggestedPrice;
      this.totalCost = totalCost;
      this.ingredients.add(ingredient);
    }

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

  public List<Ingredient> getIngredients() {
      return ingredients;
  }

  public void setIngredients(List<Ingredient> ingredients) {
      this.ingredients = ingredients;
  }

  public Double getTotalCost() {
      return totalCost;
  }

  public void setTotalCost(Double totalCost) {
      this.totalCost = totalCost;
  }

  public Double getSuggestedPrice() {
      return suggestedPrice;
  }

  public void setSuggestedPrice(Double suggestedPrice) {
      this.suggestedPrice = suggestedPrice;
  }
}

