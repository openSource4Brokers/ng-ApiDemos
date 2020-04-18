import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ICatalog } from '../_models/catalog';

@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html'
})
export class CatalogDetailsComponent implements OnInit {
  catalogForm: FormGroup;
  catalog: ICatalog;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const myJSON = localStorage.getItem('catalog');
    this.catalog = JSON.parse(myJSON);
    console.log(this.catalog);

    this.catalogForm = fb.group({
      brokerComments: [this.catalog.BrokerComments],
      brokerCompanyId: [this.catalog.BrokerCompanyId],
      calculatedUrl: [this.catalog.CalculatedUrl],
      catalogItemGuid: [this.catalog.CatalogItemGuid, Validators.required],
      categoryDescription: [this.catalog.CategoryDescription],
      categoryFR: [this.catalog.CategoryFR],
      categoryKey: [this.catalog.CategoryKey],
      companyCode: [this.catalog.CompanyCode],
      companyName: [this.catalog.CompanyName],
      companyNameFR: [this.catalog.CompanyNameFR],
      deleted: [this.catalog.Deleted],
      description: [this.catalog.Description],
      descriptionFR: [this.catalog.DescriptionFR],
      descriptionLongFR: [this.catalog.DescriptionLongFR],
      descriptionLongNL: [this.catalog.DescriptionLongNL],
      descriptionNL: [this.catalog.DescriptionNL, Validators.required],
      displayModeDescription: [this.catalog.DisplayModeDescription],
      displayModeKey: [this.catalog.DisplayModeKey],
      friendlySizeKey: [this.catalog.FriendlySizeKey],
      guarenteeKey: [this.catalog.GuarenteeKey],
      height: [this.catalog.Height],
      itemValidity: [this.catalog.ItemValidity],
      itemVisibleFrom: [this.catalog.ItemVisibleFrom],
      itemVisibleUntil: [this.catalog.ItemVisibleUntil],
      language: [this.catalog.Language],
      productDomainCodeDescriptionFR: [
        this.catalog.ProductDomainCodeDescriptionFR
      ],
      productDomainCodeDescriptionNL: [
        this.catalog.ProductDomainCodeDescriptionNL
      ],
      productDomainCodeKey: [this.catalog.ProductDomainCodeKey],
      productGuid: [this.catalog.ProductGuid],
      productName: [this.catalog.ProductName],
      productValidity: [this.catalog.ProductValidity],
      productVisibleFrom: [this.catalog.ProductVisibleFrom],
      productVisibleUntil: [this.catalog.ProductVisibleUntil],
      reference: [this.catalog.Reference],
      secureGUID: [this.catalog.SecureGUID],
      subCategoryDescription: [this.catalog.SubCategoryDescription],
      subCategoryFR: [this.catalog.SubCategoryFR],
      subCategoryKey: [this.catalog.SubCategoryKey],
      systemIdentifier: [this.catalog.SystemIdentifier],
      targetKey: [this.catalog.TargetKey],
      title: [this.catalog.Title],
      url: [this.catalog.Url, Validators.required],
      version: [this.catalog.Version],
      width: [this.catalog.Width],
      origin: [this.catalog.origin]
    });
  }

  ngOnInit() {
    this.catalogForm.valueChanges.subscribe(console.log);
  }
}
