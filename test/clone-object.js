  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
         obj = Object.assign({}, expected);
    expect(obj).toEqual(expected);
   expect(obj).not.toBe(expected);
  });
