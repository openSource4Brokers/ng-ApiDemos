import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ICatalog } from '../_models/catalog';

@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
})
export class CatalogDetailsComponent implements OnInit {
  title: string;
  cat: ICatalog;

  public onSelected: Subject<boolean>;

  catForm: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {}

  ngOnInit() {
    this.catForm = this.fb.group({
      brokerComments: [this.cat.BrokerComments],
      brokerCompanyId: [this.cat.BrokerCompanyId],
      calculatedUrl: [this.cat.CalculatedUrl],
      catalogItemGuid: [this.cat.CatalogItemGuid, Validators.required],
      categoryDescription: [this.cat.CategoryDescription],
      categoryFR: [this.cat.CategoryFR],
      categoryKey: [this.cat.CategoryKey],
      companyCode: [this.cat.CompanyCode],
      companyName: [this.cat.CompanyName],
      companyNameFR: [this.cat.CompanyNameFR],
      deleted: [this.cat.Deleted],
      description: [this.cat.Description],
      descriptionFR: [this.cat.DescriptionFR],
      descriptionLongFR: [this.cat.DescriptionLongFR],
      descriptionLongNL: [this.cat.DescriptionLongNL],
      descriptionNL: [this.cat.DescriptionNL, Validators.required],
      displayModeDescription: [this.cat.DisplayModeDescription],
      displayModeKey: [this.cat.DisplayModeKey],
      friendlySizeKey: [this.cat.FriendlySizeKey],
      guarenteeKey: [this.cat.GuarenteeKey],
      height: [this.cat.Height],
      itemValidity: [this.cat.ItemValidity],
      itemVisibleFrom: [this.cat.ItemVisibleFrom],
      itemVisibleUntil: [this.cat.ItemVisibleUntil],
      language: [this.cat.Language],
      productDomainCodeDescriptionFR: [this.cat.ProductDomainCodeDescriptionFR],
      productDomainCodeDescriptionNL: [this.cat.ProductDomainCodeDescriptionNL],
      productDomainCodeKey: [this.cat.ProductDomainCodeKey],
      productGuid: [this.cat.ProductGuid],
      productName: [this.cat.ProductName],
      productValidity: [this.cat.ProductValidity],
      productVisibleFrom: [this.cat.ProductVisibleFrom],
      productVisibleUntil: [this.cat.ProductVisibleUntil],
      reference: [this.cat.Reference],
      secureGUID: [this.cat.SecureGUID],
      subCategoryDescription: [this.cat.SubCategoryDescription],
      subCategoryFR: [this.cat.SubCategoryFR],
      subCategoryKey: [this.cat.SubCategoryKey],
      systemIdentifier: [this.cat.SystemIdentifier],
      targetKey: [this.cat.TargetKey],
      title: [this.cat.Title],
      url: [this.cat.Url, Validators.required],
      version: [this.cat.Version],
      width: [this.cat.Width],
      origin: [this.cat.origin],
    });

    // this.catForm.valueChanges.subscribe(console.log);
  }
}
