  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const myAction = async (name, value) => {
    const normalizedName = name.replace(/(^\w|\s\w)/g, el => el.toUpperCase())
    session.name = normalizedName
  }

  return myAction(args.name, args.value)