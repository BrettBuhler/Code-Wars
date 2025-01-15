fn main() {
    let name: String = name_shuffler("Brett Buhler");
    println!("New Name = {}", name);
}

fn name_shuffler(s: &str) -> String {
    let mut names = s.splitn(2, ' ');
    let first_name = names.next().unwrap();
    let last_name = names.next().unwrap();
    format!("{} {}", last_name, first_name)
}
