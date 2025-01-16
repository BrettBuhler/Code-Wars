fn main() {
    let test = stray(&[2,2,2,1]);
    println!("This is the RESULT: {}", test);
}

fn stray (arr: &[u32]) -> u32 {
    if arr.len() == 1 || arr.len() == 2 {
        return arr[0];
    }
    let a = arr[0];
    let b = arr[1];
    for value in arr.iter().skip(2) {
        if a == *value && a != b {
            return b;
        } else if b == *value && a !=b {
            return a;
        } else if a == b && *value != a {
            return *value;
        }
    }
    return arr[0];
}
