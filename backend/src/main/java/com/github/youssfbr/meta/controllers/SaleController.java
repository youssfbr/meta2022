package com.github.youssfbr.meta.controllers;

import com.github.youssfbr.meta.entities.Sale;
import com.github.youssfbr.meta.services.ISaleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sales")
public class SaleController {

    private final ISaleService saleService;

    public SaleController(ISaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping
    public List<Sale> findSales() {
        return saleService.findSales();
    }

}