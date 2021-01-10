rm -rf build
mkdir build
# rm -rf public/views
# mkdir -b public/views
rm -rf index.*
cd build
emcmake cmake ..
make