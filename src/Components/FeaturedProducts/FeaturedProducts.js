import React from "react";
import styles from './FeaturedProducts.module.css';
import { useApp } from "../../context/AppContextProvider";
import { ProductCard } from "../ProductCard/ProductCard";

export const FeaturedProducts = ({product}) => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    return (
        <React.Fragment>
            <div className={`${styles.featuredProductBox} col-12 d-inline-flex flex-column py-4`}>
				<div className={`${windowWidth === "mobile" && 'p-0'} container`}>
					<h2 className={`${styles.availSizeTitle} mt-0 col-12 d-inline-flex align-items-center justify-content-between ${windowWidth === "mobile" && 'px-4'}`}>Featured Products</h2>
					{windowWidth === "mobile" &&
						<span className={`${styles.smallTitle} col-12 mb-3 mt-0 d-inline-block float-left px-4`}>Hurry Up ! Steal  your deals now</span>
					}
					<div className={`${styles.allFeaturedProduct} ${windowWidth === "mobile" && 'px-4'} col-12 mb-3 d-inline-flex gap-3`}>
						{product?.map((item, index) => {
							return (
								<div className={`${windowWidth === "mobile" ? 'col-5' : 'col-2'} flex-shrink-0`} key={index}>
									<ProductCard item={item} index={index} />
								</div>
							)
						})}
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}