import styled, { createGlobalStyle } from 'styled-components'
import { IPropContainerSidebar, IPropsContainerInput } from './Styles.interface'
import { Sidebar } from 'primereact/sidebar'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'

export const Styles = createGlobalStyle`
    span, label, p, h1, h2, h3, h4, i {
        color: ${({ theme }) => theme.textColor};
    }

    i {
      font-size: 19px;
    }

    input, textarea {
        background-color: ${({ theme }) => theme.inputBackgroundColor};
        border-color: ${({ theme }) => theme.borderComponentsColor};
        color: ${({ theme }) => theme.textColor};

        &:hover, &:focus{
            border-color: ${({ theme }) => theme.mainColor};
            box-shadow: none;
        }

        &::placeholder {
          color: ${({ theme }) => theme.colorPlaceholder};
        }

        &.p-invalid {
          border-color: ${({ theme }) => theme.redColor} !important;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .icon-field {
        width: 100%;
    }

    .p-inputgroup-addon {
      background-color: ${({ theme }) => theme.containerColor};
      border-color: ${({ theme }) => theme.borderComponentsColor};
      padding: 0px;
      width: 40px;
      min-width: 40px;
      height: 42px;
    }

    .p-inputgroup {
      .p-input-icon {
        margin-top: 0px !important;
        transform: translateY(-50%) !important;
      }
    }

    .p-inputgroup-addon-required {
      border-color: ${({ theme }) => theme.redColor};
    }

    .border-radius img {
      border-radius: 50%;
    }

    .required {
      color: ${({ theme }) => theme.redColor};
    }

    .loading-data {
        background-color: ${({ theme }) => theme.mainColor} !important;
        color: ${({ theme }) => theme.whiteColor} !important;
        border: none !important;
        
        button {
            background-color: ${({ theme }) => theme.mainColor} !important;
            border-color: ${({ theme }) => theme.whiteColor} !important;
            svg {
                color: ${({ theme }) => theme.whiteColor} !important;
            }
            &:focus-within {
                background-color: ${({ theme }) => theme.mainColor} !important;
                color: ${({ theme }) => theme.whiteColor};
            }

            &:focus {
                background-color: ${({ theme }) => theme.mainColor} !important;
                color: ${({ theme }) => theme.whiteColor};
            }
        }

        div {
            .sonner-loading-wrapper {
                .sonner-spinner {
                    .sonner-loading-bar {
                        background-color: ${({ theme }) =>
                          theme.whiteColor} !important;
                    }
                }
            }
        }
    }

    .p-icon-field {
      width: 100%;
    }

    .p-password-panel {
      background-color: ${({ theme }) => theme.backgroundColor};

      color: ${({ theme }) => theme.textColor};
    }

    .send-new-code {
      .sent-element {
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .disabled-element {
      span {
        color: ${({ theme }) => theme.disabledColor};
      }
    }

    .validate-code {
      span {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    .go-back {
      color: ${({ theme }) => theme.textColor};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .p-button:focus {
      box-shadow: none !important;
    }

    .p-dropdown-items-wrapper {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
      background-color: ${({ theme }) => theme.borderColor};
      &.p-dropdown-item-label {
        color: ${({ theme }) => theme.textColor};
      }
    }

    .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
      background-color: ${({ theme }) => theme.borderColor};

      .p-dropdown-item-label {
        color: ${({ theme }) => theme.textColor};
      }
    }

    .p-message.p-component.p-message-contrast.p-message-enter-done {
      border: 1.5px solid ${({ theme }) => theme.mainColor};

      span {
        color: ${({ theme }) => theme.textColor};
      }

      .p-message-icon, .p-message-close {
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .container-section {
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
    }

    .gray-color {
      border-color: ${({ theme }) => theme.grayColor} !important;
    }

    .p-multiselect-header, .p-multiselect-items-wrapper {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    .p-dropdown-header {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    .p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
      background-color: ${({ theme }) => theme.borderColor};
    }

    // TODO: Agregar estilos correcto para el multi checkbox ya que no se ve bien.
    .p-checkbox .p-checkbox-box {
      background-color: ${({ theme }) => theme.backgroundColor};
      border: 1px solid ${({ theme }) => theme.colorPlaceholder};
    }

    // TODO: Agregar estilos correcto para el multi checkbox ya que no se ve bien.
    .p-checkbox.p-highlight .p-checkbox-box {
      background-color: ${({ theme }) => theme.mainColor} !important;
      border: 1px solid ${({ theme }) => theme.mainColor} !important;
    }

    .p-checkbox.p-component {
      /* width: 100%; */
      display: flex;
      justify-content: center;
    }

    .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
      background-color: ${({ theme }) => theme.borderColor};
      border: 0px;
      padding: 10px 20px;

      span {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    .p-multiselect-close:hover {
      background-color: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.whiteColor};
    }
    
    .p-chip.p-component {
      background-color: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.whiteColor};
    }

    .p-multiselect-token {
      background-color: ${({ theme }) => theme.mainColor};

      svg {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    .p-multiselect-label {
      height: 41px;
      display: flex;
      gap: 2px;
    }

    .p-multiselect-footer {
      background-color: ${({ theme }) => theme.containerColor};
      color: ${({ theme }) => theme.textColor};
    }

    .p-placeholder {
      color: ${({ theme }) => theme.grayColor};
    }

    .p-multiselect .p-multiselect-label {
      padding: 0.65rem 0.75rem;
    }

    .p-chip-text {
      color: ${({ theme }) => theme.whiteColor};
    }

    .p-invalid {
      border-color: ${({ theme }) => theme.redColor} !important;
    }

    .p-dropdown-label.p-inputtext.p-placeholder {
      span {
        color: ${({ theme }) => theme.grayColor} !important;
      }
    }

    .p-inputtext.p-component.p-disabled {
      background-color: ${({ theme }) => theme.containerColor};
    }

   .p-multiselect.p-component.p-inputwrapper.p-multiselect-chip.p-multiselect-clearable.p-inputwrapper-focus, .p-dropdown.p-component.p-inputwrapper.p-inputwrapper-focus {
      box-shadow: none !important;
   }

   .quick-access.p-overlaypanel .p-overlaypanel-content {
      padding: 5px 0px;
      
      div {
        div {
          padding: 10px 25px;

          &:hover {
            background-color: ${({ theme }) => theme.mainColor};

            span, i {
              color: ${({ theme }) => theme.whiteColor};
            }
          }
        }
      }
   }

   .actions-menu.p-overlaypanel .p-overlaypanel-content {
      width: max-content;
      padding: 5px 0px;

      .user-information-menu {
        padding: 0px 15px;
        div {
          margin: 1px 0px;
          span, i {
            color: ${({ theme }) => theme.grayColor};
          }
        }
      }

      .p-divider {
        margin: 14px 0px 0px 0px;
      }

      .options-menu {
        margin-top: 3px;
        div {
           padding: 7px 15px;

          &:hover {
            background-color: ${({ theme }) => theme.mainColor};
  
            span, i {
              color: ${({ theme }) => theme.whiteColor};
            }
          }
        }
      }
   }

   .p-overlaypanel {
      background-color: ${({ theme }) => theme.backgroundColor};
   }

    .current-local {
      .input-change-local {
        background-color: ${({ theme }) => theme.inputBackgroundColor};
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 6px 10px;
        border: 1px solid ${({ theme }) => theme.grayColor};
        border-radius: 5px;

        .icon-divider {
          border-left: 1px solid ${({ theme }) => theme.grayColor};
          padding-left: 10px;

          i {
            font-size: 16px;
            color: ${({ theme }) => theme.grayColor};
          }
        }

        span {
          font-size: 16px;
          font-weight: 500;
          color: ${({ theme }) => theme.grayColor};
          margin-top: -3px;
        }
      }
    }

    .p-avatar.p-avatar-circle {
      background-color: ${({ theme }) => theme.mainColor};
      span {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    nav {
      ul {
        li {
          list-style: none !important;

          &:hover {
            a {
              .container-create-element-menu {
                display: flex;
                visibility: visible;
              }
            }
          }
          
          a {
            i {
              font-size: 21px;
            }

            span {
              font-size: 15px;
            }

            .container-create-element-menu {
              display: none;
              visibility: hidden;
            }
          }
          
          .active {
            span, i {
              color: ${({ theme }) => theme.mainColor};
            }
          }
        }

        .active-parent {
          .menu-header {
            span, i {
              color: ${({ theme }) => theme.mainColor};
            }
          }
        }

        .subitem-content-li {
          margin-top: 10px;
        }
      }

      .subitem-content-ul {
        padding-top: 0px !important;
      }
    }

    .new-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 7px 25px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.mainColor};
      span, i {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    .button-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      gap: 5px;
      padding: 7px 20px;
      border: 1px solid ${({ theme }) => theme.grayColor};
      border-radius: 20px;

      &:hover {
        border-color: ${({ theme }) => theme.mainColor};
        i, span {
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }

    .button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 6px 15px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.mainColor};
      border-color: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.whiteColor};

      span, i {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

      .p-tabview-nav {
        li {
          a {
            font-weight: 400;
            padding: 12px;
          }
        }
      }

    .p-tabview-nav-link {
      display: flex;
      gap: 3px;
    }


    .p-datatable .p-datatable-thead > tr > th {
      font-weight: 500;
    }

    .p-tag.p-component {
      span {
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    .p-card-content {
      padding-top: 5px;
    }

    .p-tabview-panels {
      padding: 5px 0px;
    }

    .press-icon {
      cursor: pointer;
      
      &:hover { 
        color: ${({ theme }) => theme.mainColor};
        i {
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }

    .actions-body {
      i {
        cursor: pointer;
        &:hover { 
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }

    .p-tabview-panel {
      position: relative;
      height: 100%;
    }

    .press-icon-font {
      cursor: pointer;
      color: ${({ theme }) => theme.textColor};

      &:hover {
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .p-rating .p-rating-item.p-focus {
      box-shadow: none !important;
    }

    .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
      color: ${({ theme }) => theme.ratingColor};
    }

    .p-rating {
      gap: 5px;
      margin-top: -3px;
    }

    .rating-container {
      margin-top: 8px;
      display: flex;
      gap: 5px;

      span {
        font-size: 14px;
      }

      .qualification-length {
        margin-bottom: 1.1px;
      }
    }

    .p-icon.p-rating-icon {
      width: 15px;
      height: 15px;
    }

    .gm-ui-hover-effect {
      width: 0px !important;
      height: 0px !important;
    }

    .gm-style-iw.gm-style-iw-c {
      padding:  0px !important;
      max-width: 400px !important;
    }

    .gm-style-iw-t {
      bottom: 50px !important;

      &:first-of-type {
        padding: 0px;
        .gm-style-iw-chr {
          .gm-style-iw-ch {
            padding-top: 0px;
          }

          button {
            span {
              margin: 0px !important;
            }
          }
        }

        .gm-style-iw-d {
          overflow: hidden !important;
        }
      }
    }

    .redirect-element {
      cursor: pointer;
      display: flex;
      align-items: center;
      
      span, i {
        color: ${({ theme }) => theme.blueColor};
      }
      &:hover {
        span, i {
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }

    .p-sortable-column {
      padding: 0px 10px !important;
      .p-column-header-content {
        font-weight: 400;

        span {
          font-size: 14px;

          svg.p-icon.p-sortable-column-icon {
            width: 10px;
            height: 10px;
            color: ${({ theme }) => theme.svgColor};
          }
        }

        .p-column-filter.p-fluid.p-column-filter-menu {
          .p-column-filter-menu-button {
            width: 22px;
            height: 22px;

            svg.p-icon {
              width: 13px;
              height: 13px;
              color: ${({ theme }) => theme.svgColor};
            }

            &:hover {
              svg {
                color: ${({ theme }) => theme.whiteColor};
              }
            }
          }
          
        }
      }
    }

    .p-datatable-tbody {
      tr {
        td {
          font-size: 14px;
          padding: 8px 6px;
          span {
            font-size: 14px;
          }

          i {
            font-size: 16px;
          }
        }
      }
    }

    .p-datatable .p-datatable-thead > tr > th {
      background-color: ${({ theme }) => theme.borderLightColor};
    }

    // ! Acá podemos agregar el color para cuando se ordene en una tabla
    .p-sortable-column.p-highlight {
      span {
        svg {
          color: ${({ theme }) => theme.mainColor} !important;
        }
      }
    }

    .p-column-filter-menu-button.p-link.p-column-filter-menu-button-active {
      background-color: ${({ theme }) => theme.borderLightColor};

      svg {
        color: ${({ theme }) => theme.mainColor} !important;
      }
    }

    .item-inactive {
      background-color: ${({ theme }) => theme.lightRedColor};
    }

    .item-active {
      background-color: ${({ theme }) => theme.lightGreenColor};
    }

    .p-datatable-tbody tr td span {
      font-size: 14px;
      font-weight: 400;
    }

    .p-datatable-header {
      background-color: ${({ theme }) => theme.backgroundColor};

      input, textarea {
        height: 36px;
        border-radius: 30px;
        border-color: ${({ theme }) => theme.borderColor};
      }
    }

    .title-sidebar {
      font-size: 20px;
      font-weight: 500;
      color: ${({ theme }) => theme.mainColor};
    }

    .p-sidebar-icons {
      button:hover {
        background-color: ${({ theme }) => theme.mainColor};
        color: ${({ theme }) => theme.whiteColor};
      }
    }

    .p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible, .p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {
      box-shadow: none !important;
    }

    .new-employee {
      &:first-of-type {
        font-size: 18px;
        font-weight: 500;
      }
    }

    .p-card.p-component {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    .p-tabview-nav {
      background-color: ${({ theme }) => theme.backgroundColor};

      li {
        a {
          background-color: ${({ theme }) => theme.backgroundColor};
          
        }
      }
    }

    .p-tabview .p-tabview-panels {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    .p-confirm-dialog.p-dialog.p-component {
      min-width: 400px;
      div {
        background-color: ${({ theme }) => theme.containerColor};
      }

      .p-dialog-header {
        div {
          color: ${({ theme }) => theme.mainColor};
        }
      }

      .p-dialog-content {
        span:last-of-type {
          margin-left: 8px;
        }
      }

      .p-dialog-footer {
        button:first-of-type:hover {
          background-color: ${({ theme }) => theme.containerColor};
          span {
            color: ${({ theme }) => theme.mainColor};
          }
        }

        button:last-of-type {
          span {
            color: ${({ theme }) => theme.whiteColor};
          }

          &:hover {
            background-color: ${({ theme }) => theme.redColor};
          }
        }
      }
    }

    button:hover {
      background-color: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.whiteColor} !important;
    }

    button:focus-visible {
      box-shadow: none;
    }

    .active-container {
      border-color: ${({ theme }) => theme.successColor};
      box-shadow: 0.8px 0.4px 3px 1px ${({ theme }) => theme.successColor}; 
    }
    
    .color-active-a {
      color: ${({ theme }) => theme.successColor};
    }
    
    .add-button {
      width: fit-content;
      background-color: #810ad10c;
      border-radius: 5px;
      padding: 6px 10px;
      cursor: pointer;

      span, i {
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .container-upload-images {
      width: 250px;
      display: flex;
      height: 200px;
      display: grid;
      align-content: center;
      justify-items: center;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.grayColor};
      color: ${({ theme }) => theme.grayColor};

      .pdf {
        font-size: 70px;
        color: ${({ theme }) => theme.mainColor};
      }

      i {
        font-size: 40px;
        color: ${({ theme }) => theme.grayColor};
      }
      
      span {
        margin-top: 3px;
        text-align: center;
        font-size: 13px;
        color: ${({ theme }) => theme.grayColor};
      }

      img {
        padding: 5px;
        width: 250px;
        height: calc(250px - 50px);
        padding-bottom: 50px;
      }

      .information-image {
        margin-top: 1px solid ${({ theme }) => theme.mainColor};
        height: 50px;

        .title-delete-upload {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .upload-file {
            color: ${({ theme }) => theme.textColor};
            
            &:hover {
              color: ${({ theme }) => theme.mainColor};
            }
          }

          i {
            font-size: 18px;
            color: ${({ theme }) => theme.redColor};
          }
  
          span {
            font-size: 12px;
            color: ${({ theme }) => theme.textColor};
          }
        }

      }
    }

    .header-add-element {
      th {
        font-size: 11px;
        font-weight: 500;
        color: ${({ theme }) => theme.grayColor};
        padding-bottom: 5px;
      }
    }

    .custom-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 10px;
      margin-top: 10px;
    }

    .custom-table tbody tr {
      td {
        padding: 0px 7px !important;
      }
    }

    .custom-table tbody tr td:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .custom-table tbody tr td:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .chip-multi-select {
      div {
        img {
          width: 45px;
          height: 45px;
        }
      }
    }

    .notification-menu {
      .p-overlaypanel-content {
        padding: 0px !important;

        .p-divider.p-component {
          margin: 2px !important;
        }

        .notification-title {
          span {
            color: ${({ theme }) => theme.mainColor};
          }
        }

        .p-tabview.p-component {
          ul {
            li {
              a {
                padding: 10px 60px;
                font-weight: 400;
              }
              &.p-highlight {
                a {
                  border-bottom: 4px solid ${({ theme }) =>
                    theme.mainColor} !important;
                  span {
                    color: ${({ theme }) => theme.mainColor} !important;
                  }
                }
              }
            }
          }
        }
      }
    }

    .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
      border-color: ${({ theme }) => theme.mainColor};
    }

    .container-select-button {
      display: flex !important;
      .p-selectbutton.p-button-group.p-component {
        width: 100%;
        .p-button.p-component {
          background-color: ${({ theme }) => theme.backgroundColor};
          width: 50%;
          border-color: ${({ theme }) => theme.grayColor};
          
          span {
            color: ${({ theme }) => theme.textColor};
            font-weight: 400;
          }

          &.p-highlight {
            background-color: ${({ theme }) => theme.mainColor};
            border-color: ${({ theme }) => theme.mainColor};
            span {
              color: ${({ theme }) => theme.whiteColor};
            }
          }
        }
      }
    }

    .error {
      color: ${({ theme }) => theme.redColor};
      font-size: 14px;
    }

    .placeholder-color {
      color: ${({ theme }) => theme.grayColor};
    }

    .schedule-structure {
      border-bottom: 1px solid ${({ theme }) =>
        theme.borderLightColor} !important;

      .actions {
        i {
          color: ${({ theme }) => theme.mainColor} !important;
        }

        .disabled-action {
          pointer-events: none;
          color: ${({ theme }) => theme.grayColor} !important;
        }
      }
    }

    .schedule-structure:last-child {
      border-bottom: none !important;
    }

    .checkbox-duplicate {
      .p-checkbox.p-component.p-highlight {
        div {
          background-color: ${({ theme }) => theme.mainColor} !important;
        }

        &.p-disabled {
          div {
            background-color: ${({ theme }) => theme.grayColor} !important;
          }
        }
      }
    }

    .apply-disabled {
      background-color: ${({ theme }) => theme.grayColor} !important;
      padding: 5px 15px;
      border-radius: 16px;
      pointer-events: none;
      span {
        color: ${({ theme }) => theme.whiteColor} !important;
      }
    }

    .apply-enabled {
      background-color: ${({ theme }) => theme.mainColor} !important;
      padding: 5px 15px;
      border-radius: 16px;
      cursor: pointer;
      span {
        color: ${({ theme }) => theme.whiteColor} !important;
      }
    }

    .color-error {
      color: ${({ theme }) => theme.redColor};
    }

    .autocomplete-container {
      position: relative;
      z-index: 1000;
    }

    .pac-container {
      z-index: 2000 !important; /* Asegúrate de que el menú desplegable esté siempre por encima del modal */
    }

    .p-tooltip.p-component {
      .p-tooltip-text {
        div {
          span {
            color: ${({ theme }) => theme.whiteColor} !important;
          }
        }
       }
    }

    .icon-field.p-icon-field {
      input {
        height: 42px;
      }
    }

    .p-datatable.p-component {
      .p-datatable-wrapper {
        &::-webkit-scrollbar {
          height: 9px;
        }

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.whiteColor};
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: ${({ theme }) => theme.grayColor};
        }
      }
      tbody tr td {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
        span {
          color: ${({ theme }) => theme.textColor};
        }
        .p-tag {
          span {
            color: ${({ theme }) => theme.whiteColor};
          }
        }

        .p-checkbox.p-component {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .p-paginator-bottom.p-paginator.p-component {
        background-color: ${({ theme }) => theme.containerColor};

        .p-paginator-pages {
          .p-paginator-page.p-highlight {
            background-color: ${({ theme }) => theme.mainColor} !important;
            color: ${({ theme }) => theme.whiteColor} !important;
          }

        }

        button:hover {
          background-color: transparent !important;
          color: ${({ theme }) => theme.mainColor} !important;
        }

        .p-dropdown.p-component {
          background-color: ${({ theme }) => theme.backgroundColor};
          border-color: ${({ theme }) => theme.borderColor};
          height: 42px;
          &:hover {
            border-color: ${({ theme }) => theme.mainColor};
          }
        }
      }
    }

    .cursor-icon {
      &:hover {
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .header-structure {
      position: sticky;
      top: 0;
      z-index: 10;
      background-color: ${({ theme }) => theme.containerColor};
      transition: background-color 0.3s ease;
    }

    .p-inputswitch.p-highlight .p-inputswitch-slider {
      background-color: ${({ theme }) => theme.successColor};
      transition: background-color 0.3s ease-in-out;
    }

    .tabview-settings {
      div {
        div {
          ul {
            position: fixed;
            width: 100%;
            z-index: 100;
            background-color: ${({ theme }) => theme.containerColor};
            li {
              a {
                display: flex;
                gap: 5px;
                background-color: ${({ theme }) => theme.containerColor};
              }
             
              &.p-highlight {
                a {
                  span {
                    color: ${({ theme }) => theme.mainColor};
                  }
                }
              }
            }
          }
        }
      }

      .p-tabview-panels {
        background-color: ${({ theme }) => theme.containerColor};
      }
    }

    .avatar-partner {
      background-color: ${({ theme }) => theme.mainColor};
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: ${({ theme }) => theme.whiteColor} !important;
      }
    }

    .text-main-color {
      color: ${({ theme }) => theme.mainColor} !important;
    }

    .border-button-add-element {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: 1px solid ${({ theme }) => theme.mainColor};
      border-radius: 5px;
      padding: 7px 10px;
      cursor: pointer;

      span, i {
        font-size: 15px;
        color: ${({ theme }) => theme.mainColor};
      }

      i {
        font-size: 14px;
        margin-top: 1px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.mainColor};
        span, i {
          color: ${({ theme }) => theme.whiteColor};
        }
      }
    }

    .border-button-delete-element {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: 1px solid ${({ theme }) => theme.redColor};
      border-radius: 5px;
      padding: 7px 10px;
      cursor: pointer;

      span, i {
        font-size: 15px;
        color: ${({ theme }) => theme.redColor};
      }

      i {
        font-size: 14px;
        margin-top: 1px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.redColor};
        span, i {
          color: ${({ theme }) => theme.whiteColor};
        }
      }
    }

    .p-sidebar.p-component {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    .p-inputnumber-input.p-inputtext.p-component {
      width: 100%;
    }

    
    .p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext {
      box-shadow: none !important;
    }

    .border-button-delete-element.disabled {
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    }

    .cursor-color-error {
      &:hover {
        color: ${({ theme }) => theme.redColor};
      }
    }

    .cursor-icon-color-main {
      color: ${({ theme }) => theme.textColor};
      cursor: pointer;
      font-size: 22px;

      &:hover {
        color: ${({ theme }) => theme.mainColor};
      }
    }

  .notification-menu {
    width: 35%;

    .p-overlaypanel-content {
      padding: 0px !important;

      .p-divider.p-component {
        margin: 2px !important;
      }

      .notification-title {
        span {
            color: ${({ theme }) => theme.mainColor};
        }
      }

      .p-tabview.p-component {
        ul {
          width: 100%;
          li {
            width: 50%;
            a {
              justify-content: center;
              padding: 10px 0px;
              font-weight: 400;
            }
            &.p-highlight {
              a {
                border-bottom: 4px solid ${({ theme }) =>
                  theme.mainColor} !important;
                span {
                  color: ${({ theme }) => theme.mainColor} !important;
                }
              }
            }
          }
        }

        .p-tabview-panels {
          height: 370px;
        }
      }
    }
  }

  .notifications-structure {
    max-height: 100%;
    overflow-y: auto;
  }

  .structure-card-notification {
    width: 100%;
    max-height: 140px;
    padding: 10px;
    display: flex;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0px 0px 3px 0.5px ${({ theme }) => theme.borderColor};
    cursor: pointer;

    div:first-of-type {
      width: 15%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      span {
        font-size: 12px;
        font-weight: 300;
        color: ${({ theme }) => theme.grayColor};
      }

      i {
        font-size: 45px;
        color: ${({ theme }) => theme.mainColor};
      }
    }

    div:last-of-type {
      width: 85%;
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      gap: 4px;

      span:first-of-type {
        font-size: 15px;
        font-weight: 600;
        color: ${({ theme }) => theme.textColor};
      }
      
      span:last-of-type {
        font-size: 13px;
        font-weight: 300;
        color: ${({ theme }) => theme.textColor};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.mainColorTransparent};
      border-color: ${({ theme }) => theme.mainColor};
    }
  }

  .p-datepicker-group-container {
    .p-datepicker-group {
      .p-datepicker-calendar-container {
        table {
          tbody {
            tr {
              td {
                span.p-highlight {
                  color: ${({ theme }) => theme.whiteColor} !important;
                  background-color: ${({ theme }) =>
                    theme.mainColor} !important;
                }
              }
            }
          }
        }
      }
    }
  }  

  .p-column-filter-overlay-menu .p-column-filter-buttonbar {
    padding: 0px 1.25rem 1.25rem;

    button:first-of-type {
      border-color: ${({ theme }) => theme.redColor};

      span {
        color: ${({ theme }) => theme.redColor};
      }

      &:hover {
        background-color: ${({ theme }) => theme.redColor};
        span {
          color: ${({ theme }) => theme.whiteColor};
        }
      }
    }

    button:last-of-type {
      border-color: ${({ theme }) => theme.mainColor};
      background-color: ${({ theme }) => theme.mainColor};

      span {
        color: ${({ theme }) => theme.whiteColor};
      }
    }
  }

  .custom-tag {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.whiteColor} !important;
  }

  .toggle-select-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius:35px
  }

  .custom-toggle .p-button {
      border-radius: 50px;
      border: none;
      background-color: transparent;
      color: #333;
      transition: background-color 0.3s ease, color 0.3s ease;
  }

  .card-icon-toggle {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.whiteColor};
    span{
      color: ${({ theme }) => theme.whiteColor};
    }
  }
  
  .custom-radio .p-radiobutton-box {
    border-color: ${({ theme }) => theme.mainColor};
    width: 20px;
    height: 20px;
    background-color: transparent;
    padding-right: 1px;
    padding-bottom: 1px;
  }

  .custom-radio .p-radiobutton-box .p-radiobutton-icon {
      background-color: ${({ theme }) => theme.mainColor};
      width: 10px;
      height: 10px;
      border-radius: 50%;
  }

  .custom-radio .p-radiobutton-box.p-highlight {
      border-color: ${({ theme }) => theme.mainColor} !important;
      box-shadow: 0 0 0 2px rgba(106, 50, 159, 0.3);
  }

  .selection-plan-border{
    border-color: ${({ theme }) => theme.mainColor};
  }

  .no-selection-plan-border{
    border: 1px solid rgb(158 158 158 / 44%)
  }

  .option-actions {
    color: ${({ theme }) => theme.mainColorSecondary};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }

  .toggleable-content {
    overflow: hidden;
  }

  .toggleable-content.open {
    max-height: 100%;
    transition: max-height 0.3s ease-in-out;
  }

  .toggleable-content.closed {
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  }

  .p-float-label label {
    top: 1.5rem;
    left: 1rem;
    transition: all 0.3s ease;
  }

  .p-float-label input:focus + label,
  .p-float-label input:not(:placeholder-shown) + label {
    top: 0.1rem;
    padding: 0 0.5rem;
    font-size: 0.85rem;
    background: linear-gradient(to top, ${({ theme }) =>
      theme.backgroundColor} 50%, #f2f3f7 50%);
  }

  .background-container-semi-gray-color {
    background-color: ${({ theme }) => theme.backgroundContainerSemiGrayColor};
  }

  .tag-background-color-orange {
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.backgroundLightOrangeColor};

    span, div, span {
      font-size: 12px;
      color: ${({ theme }) => theme.semiOrangeColor} !important;
    }
  }

  .p-indeterminate.p-checkbox.p-component.p-highlight {
    .p-checkbox-box {
      svg {
        color: ${({ theme }) => theme.whiteColor};
      }
    }
  }

  .tree-select {
    border: none;
    border-radius: 0px;
    padding: 0px;

    ul, li {
      .p-treenode-content.p-treenode-selectable {
        button:hover {
          background-color: ${({ theme }) => theme.mainColorTransparent};
        }
      }

      .p-treenode-content.p-treenode-selectable.p-highlight {
        button {
          svg {
            color: ${({ theme }) => theme.mainColor};
          }
        }
      }
    }
  }

  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background-color: ${({ theme }) => theme.mainColorTransparentLight};
  }

  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background-color: ${({ theme }) => theme.mainColorTransparentLight};
  }

  .p-tree .p-tree-container .p-treenode:focus > .p-treenode-content {
    box-shadow: none;
  }

  .p-tree-container {
    overflow: hidden;
  }
  
  .footer-buttons {
    display: flex;
    gap: 8px;

    button:first-of-type {
      border-color: transparent;
      span {
        color: ${({ theme }) => theme.redColor} !important;
      }

      &:hover {
        background-color: ${({ theme }) => theme.lightRedColor} !important;
        border-color: ${({ theme }) => theme.lightRedColor} !important;

        
      }
    }

    button:last-of-type {
      background-color: ${({ theme }) => theme.mainColor};
      border-color: ${({ theme }) => theme.mainColor};
      span {
        color: ${({ theme }) => theme.whiteColor};
      }

      &:hover {
        background-color: ${({ theme }) => theme.mainColorHover};
        border-color: ${({ theme }) => theme.mainColorHover};
      }
    }
  }
  
  .form-new-or-edit-user {
    display: flex;
    flex-direction: column;
    position: relative;

    div:first-of-type {
      height: 90%;
    }

    div:last-of-type {
      height: 10%;
    }
  }

  .p-radiobutton.p-highlight .p-radiobutton-box {
    background-color: ${({ theme }) => theme.mainColor};
    border-color: ${({ theme }) => theme.mainColor};
  }

  .selected-radio-button {
    .p-radiobutton.p-highlight .p-radiobutton-box {
      background-color: transparent !important;
    }
  }

  .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${({ theme }) => theme.mainColor};
  }

  .overlay-panel-details {
    .p-overlaypanel-content {
      padding: 10px 20px !important;
      .p-divider {
        margin: 2px !important;
      }
    }
  }

  .success-color {
    color: ${({ theme }) => theme.successColor};
  }

  .footer-buttons-sidebar {
    display: flex;
    justify-content: flex-end;
    padding: 1.25rem;
    gap: 8px;
    box-shadow: 0px -1px 3px 0.5px ${({ theme }) => theme.borderLightColor};

    button:first-of-type {
      border-color: transparent;
      span {
        color: ${({ theme }) => theme.redColor} !important;
      }

      &:hover {
        background-color: ${({ theme }) => theme.lightRedColor} !important;
        border-color: ${({ theme }) => theme.lightRedColor} !important;
      }
    }

    button:last-of-type {
      background-color: ${({ theme }) => theme.mainColor};
      border-color: ${({ theme }) => theme.mainColor};
      span {
        color: ${({ theme }) => theme.whiteColor};
      }

      &:hover {
        background-color: ${({ theme }) => theme.mainColorHover};
        border-color: ${({ theme }) => theme.mainColorHover};
      }
    }
  }

  .label-disabled {
    color: ${({ theme }) => theme.disabledColor};
  }

  .p-multiselect-select-all{
    display: flex;
  }

  .warning-icon {
    color: ${({ theme }) => theme.warningColor};
  }

  .p-card .p-card-content{
    padding: 0
  }

  #buttonOption{
    span{
      color: ${({ theme }) => theme.whiteColor};
    }
  }

`
export const ContainerSidebar = styled(Sidebar)<IPropContainerSidebar>`
  .p-sidebar-content {
    padding: ${({ $padding }) => $padding ?? '1.25rem'} !important;
  }

  .p-sidebar-header {
    box-shadow: 0px 1px 3px 0.5px ${({ theme }) => theme.borderLightColor};
  }
`
export const ContainerInputText = styled(InputText)<IPropsContainerInput>`
  border-radius: ${({ $grouped, $borderRadius }) =>
    $grouped === 'left'
      ? `0px ${$borderRadius ?? '6px'} ${$borderRadius ?? '6px'} 0px`
      : $grouped === 'right'
      ? `${$borderRadius ?? '6px'} 0px 0px ${$borderRadius ?? '6px'}`
      : $borderRadius ?? '6px'} !important;
  width: ${({ $width }) => $width ?? 'auto'};
  height: ${({ $height }) => $height ?? '42px'} !important;
  border-width: ${({ $noBorder }) =>
    $noBorder
      ? $noBorder === 'left'
        ? '1px 1px 1px 1px'
        : '1px 0px 1px 1px'
      : '1px'};
`

export const ContainerInputNumber = styled(InputNumber)<IPropsContainerInput>`
  width: ${({ $width }) => $width ?? '100%'} !important;
  input {
    border-radius: ${({ $grouped, $borderRadius }) =>
      $grouped === 'left'
        ? `0px ${$borderRadius ?? '6px'} ${$borderRadius ?? '6px'} 0px`
        : $grouped === 'right'
        ? `${$borderRadius ?? '6px'} 0px 0px ${$borderRadius ?? '6px'}`
        : $borderRadius ?? '6px'} !important;
    height: ${({ $height }) => $height ?? '42px'};
    border-width: ${({ $noBorder }) =>
      $noBorder
        ? $noBorder === 'left'
          ? '1px 1px 1px 1px'
          : '1px 0px 1px 1px'
        : '1px'};
  }
`