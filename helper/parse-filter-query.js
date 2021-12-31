    /**
     * 
     * @param {Object} queries 
     * @param {Object} filterItemObj 
     * @returns {Object} -> will return updated query object
     */
    function parseFilterString(queries, filterItemObj) {
        if(typeof filterItemObj !== 'object' && typeof queries !== 'object') {
            throw new Error('filterItem is not Object; Object required');
        }

        const filterItems = Object.keys(filterItemObj);

        const cloneQueries = {...queries};
        const isFilterQueryPresent = cloneQueries['filter'] && true;
        const filterStr = isFilterQueryPresent && cloneQueries?.filter;
    
        if(!isFilterQueryPresent) {
            return {
                ...cloneQueries,
                filter: generateFilterStrFromObj(filterItemObj)
            }
        }
    
        const isMultipleFilterItemFound = countMatched(filterStr) > 0 ? true : false;
    
        if(!isMultipleFilterItemFound && filterItems.some((filterItem => filterStr.split('__')[0] === filterItem))) {
            return {
                ...cloneQueries,
                filter: generateFilterStrFromObj(filterItemObj)
            }
        }
    
        const filterItemArr       = filterStr.split?.('--').filter(query => query) || []
    
        const filterItemSingleArr = generateFilterStrFromObj(filterItemObj).split?.('--').filter(query => query) || [];

        filterItemSingleArr.forEach(item => {
            const FoundFilteredItemIndex  = filterItemArr.findIndex(filterItemWithVal => {
            const filterItem = filterItemWithVal.split?.('__')?.[0] ?? '';
        
            if(filterItem === item.split?.('__')[0]) return true;
        
            return false;
            });

            if(FoundFilteredItemIndex === -1) {
                filterItemArr.push(item)
            } else {
                filterItemArr.splice(FoundFilteredItemIndex, 1, `${item}`);
            }
        })

        const removeDuplicate      = [...new Set(filterItemArr)];
        
        const updatedFilterItemArr = removeDuplicate.join('--');

        return {
        ...cloneQueries,
        filter: updatedFilterItemArr
        }
    }
  
    function countMatched(str) {
        const re = /--/g
        return ((str || '').match(re) || []).length;
    }

    function generateFilterStrFromObj(filterItemObj) {
        if(typeof filterItemObj !== 'object') throw new Error('generateFilterStrFromObj obj required');

        let filterStr = "";

        for (const key in filterItemObj) {
            filterStr += `${key}__${filterItemObj[key]}--`
        }

        return filterStr;
    }

    export { parseFilterString };




    // function parseFilterString(queries, filterItemObj) {
    //     if(typeof filterItemObj !== 'object') {
    //         throw new Error('filterItem is not Object; Object required');
    //     }

    //     const filterItems = Object.keys(filterItemObj);

    //     const cloneQueries = {...queries};
    //     const isFilterQueryPresent = cloneQueries['filter'] && true;
    //     const filterStr = isFilterQueryPresent && cloneQueries?.filter;
        
    //     if(!isFilterQueryPresent) {
    //       return {
    //         ...cloneQueries,
    //         filter: `${filteredItem}__${filteredVal}--`
    //       }
    //     }
        
    //     const isMultipleFilterItemFound = countMatched(filterStr) > 0 ? true : false;
    //     //if multiple filter item found string will look like - filter=category__fashion--brand__zara
    //     //if not - filter=category__fashion
        
    //     if(!isMultipleFilterItemFound && filterItems.some((filterItem => filterStr.split('__')[0] === filterItem))) {
    //       return {
    //         ...cloneQueries,
    //         filter: generateFilterStrFromObj(filterItemObj)
    //       }
    //     }
        
    //     const filterItemArr = filterStr.split?.('--').filter(query => query) || [] // ['category__fashion', '']
        
    //     const FoundFilteredItemIndex  = filterItemArr.findIndex(filterItemWithVal => {
    //       const filterItem = filterItemWithVal.split?.('__')?.[0] ?? '';
        
    //       if(filterItem === filteredItem) return true;
        
    //       return false;
    //     });

    //     console.log('index found => ', FoundFilteredItemIndex);

    //     if(FoundFilteredItemIndex === -1) {
    //         filterItemArr.push(`${filteredItem}__${filteredVal}`)
    //     }

    //     console.log('filter item arr => ', filterItemArr);
        
    //     filterItemArr.splice(FoundFilteredItemIndex, 1, `${filteredItem}__${filteredVal}--`);
        
    //     const updatedFilterItemArr = filterItemArr.join('--');
    //     console.log('updatedFilter item arr => ', updatedFilterItemArr)
    //     return {
    //       ...cloneQueries,
    //       filter: updatedFilterItemArr
    //     }
    // }
        
    // function countMatched(str) {
    //     const re = /--/g
    //     return ((str || '').match(re) || []).length;
    // }

    // function generateFilterStrFromObj(filterItemObj) {
    //     if(typeof filterItemObj !== 'object') throw new Error('generateFilterStrFromObj obj required');

    //     const filterStr = "";

    //     for (const key in filterItemObj) {
    //         filterStr += `${key}__${filterItemObj[key]}--`
    //     }

    //     return filterStr;
    // }

    // export { parseFilterString };